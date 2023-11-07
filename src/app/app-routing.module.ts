import { NgModule, inject } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn, RouterModule, RouterStateSnapshot, Routes } from '@angular/router';
import { UsersComponent } from './component/users/users.component';
import { UserdetailComponent } from './component/userdetail/userdetail.component';
import { UserResolver } from './service/user.resolver'
import { UserService } from './service/user.service';


const addEditClietResolver: ResolveFn<any> =
     (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
      return inject(UserService).getUser(route.paramMap.get('uuid')!);
    };

    
const routes: Routes = [
  { path: 'users', component: UsersComponent },
  { path: 'user/:uuid', component: UserdetailComponent, resolve: { 
    resolvedResponse: addEditClietResolver } },
  { path: '**', redirectTo: 'users' },


];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
