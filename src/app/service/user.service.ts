import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Response } from '../interface/response.interface';
import { User } from '../interface/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly apiUrl: string = 'https://randomuser.me/api';

  
  constructor(private http: HttpClient) { }


  //fetch users
  getUsers(size: number = 10): Observable<Response> {
    return this.http.get<Response>(`${this.apiUrl}/?results=${size}`).pipe(
      map (response => this.processResponse(response))
    );
  }
  //fetch user using uiid
  getUser(uuid: string): Observable<Response> {
    return this.http.get<Response>(`${this.apiUrl}/?uuid=${uuid}`).pipe(
      map (response => this.processResponse(response)));
  }


  private processResponse(response: Response): Response {
    return {

      info: { ...response.info },
      results: response.results.map((user: any) => (<User>{

        uuid: user.login.uuid,
        firstName: user.name.first,
        lastName: user.name.last,
        email: user.email,
        gender: user.gender,
        address: `${user.location.street.number} ${user.location.street.name} ${user.location.city}, ${user.location.country}`,
        username:user.login.username,
        dateOfBirth: user.dob.date,
        phone: user.phone,
        imageUrl: user.picture.medium,
        coordinates: {latitude : +user.location.coordinates.latitude , longitude :+user.location.coordinates.longitude }
      }))

    };
  }
}
