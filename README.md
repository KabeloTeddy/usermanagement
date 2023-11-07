USER Management Web Application

This is a web application for managing user information retrieved from the Random User API. It allows users to view a list of users and view detailed information about individual users. The application is built using Angular and integrates with the Random User API for user data retrieval.

## Table of Contents

- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Technologies Used

- **Angular**: The front-end of the application is built using Angular, a popular JavaScript framework for building dynamic web applications.

- **Leaflet**: Leaflet is used for displaying the location of users on a map.

- **HttpClient**: The Angular `HttpClient` module is used for making HTTP requests to the Random User API.

## Project Structure

The project is organized into the following components:

- **User Management**: The application includes a user list and user details components.

- **User Service**: This service interacts with the Random User API to retrieve user data.

- **User Resolver**: A resolver that fetches user details before navigating to the user details component.

- **Routing**: The application uses Angular Router for navigating between different components.

- **Interfaces**: Several interfaces are defined to describe the structure of data used in the application, including user information, response data, coordinates, and more.

## Usage

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/user-management-app.git
   ```

2. Navigate to the project directory:

   ```bash
   cd user-management-app
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   ng serve
   ```

   The application will be available at `http://localhost:4200/`.

5. Explore the user list, view user details, and make use of the provided functionality.

## Contributing

If you would like to contribute to this project, feel free to fork the repository and submit pull requests. Your contributions are highly appreciated.



Feel free to enhance this README with additional information, such as deployment instructions, configuration details, or any other relevant information about your project.
