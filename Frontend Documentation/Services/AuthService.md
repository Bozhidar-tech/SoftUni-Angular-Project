#### AuthService Documentation

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
