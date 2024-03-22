## Overview

- The Gold's Gym Website serves as an engaging platform dedicated to showcasing the comprehensive range of offerings, services, and valuable information tailored for both potential customers and fitness enthusiasts alike.
- With a user-friendly interface, our website invites visitors to explore and discover the essence of our brand. From an extensive array of facilities to personalized services, our platform is designed to provide an immersive experience, enabling users to delve into the world of fitness with ease.

## Technologies Used (MEAN Stack)

- MongoDB
- Node.js
- Express.js
- Angular

## Project Architecture

## Frontend (Angular):

### Components
  - 'home' - Displays the homepage with featured content and services.
  - 'shop' -  Displays the main shop page showcasing available supplements.
  - 'classes' - Lists the classes offered by the gym, along with schedules and instructors.
  - 'memberships' - Describes the various membership plans and benefits.
  - 'contact' - Allows users to get in touch with the gym through a contact form.

### Services
  ##### AuthService Documentation

The `AuthService` class provides methods to handle user authentication-related tasks such as registration, login, password recovery, and user data management.

##### Methods

###### `registerService(registerObj: Register): Observable<Register>`

Registers a new user.

- **Parameters:**
  - `registerObj`: The registration information of the user.
    - Type: `Register` (interface representing user registration data).
  
- **Returns:** An Observable emitting the registration response.

###### `loginService(loginObj: Login): Observable<Login>`

Logs in an existing user.

- **Parameters:**
  - `loginObj`: The login credentials of the user.
    - Type: `Login` (interface representing user login data).

- **Returns:** An Observable emitting the login response.

###### `sendEmailService(email: string)`

Sends an email for password reset.

- **Parameters:**
  - `email`: The email address of the user requesting password reset.
    - Type: `string`

- **Returns:** An Observable emitting the response of the email sending operation.

###### `resetPasswordService(resetObj: any)`

Resets the password of the user.

- **Parameters:**
  - `resetObj`: The reset password information.
    - Type: `any`

- **Returns:** An Observable emitting the response of the password reset operation.

###### `updateService(dataObj: UpdateUser): Observable<UpdateUser>`

Updates user data.

- **Parameters:**
  - `dataObj`: The updated user data.
    - Type: `UpdateUser` (interface representing updated user data).

- **Returns:** An Observable emitting the updated user data response.

###### `isLoggedIn(): boolean`

Checks if the user is logged in.

- **Returns:** `true` if the user is logged in, otherwise `false`.
