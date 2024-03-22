## Function Documentation

The following functions are responsible for user authentication, registration, profile updates, and password management within the application.

### `register`

- **Description:** Registers a new user.
- **Parameters:**
  - `req`: Express request object containing user registration details.
  - `res`: Express response object.
  - `next`: Express next function to invoke the next middleware.
- **Returns:** Calls the next middleware with a success message upon successful registration.

### `registerAdmin`

- **Description:** Registers a new admin user.
- **Parameters:**
  - `req`: Express request object containing admin registration details.
  - `res`: Express response object.
  - `next`: Express next function to invoke the next middleware.
- **Returns:** Calls the next middleware with a success message upon successful admin registration.

### `login`

- **Description:** Authenticates a user and generates an authentication token.
- **Parameters:**
  - `req`: Express request object containing user login credentials.
  - `res`: Express response object.
  - `next`: Express next function to invoke the next middleware.
- **Returns:** JSON response with status, message, user data, and authentication token upon successful login.

### `sendEmail`

- **Description:** Sends an email for password reset.
- **Parameters:**
  - `req`: Express request object containing user email for password reset.
  - `res`: Express response object.
  - `next`: Express next function to invoke the next middleware.
- **Returns:** Calls the next middleware with a success message upon successful email sending.

### `resetPassword`

- **Description:** Resets user password.
- **Parameters:**
  - `req`: Express request object containing token and new password.
  - `res`: Express response object.
  - `next`: Express next function to invoke the next middleware.
- **Returns:** Calls the next middleware with a success message upon successful password reset.

### `updateData`

- **Description:** Updates user profile information.
- **Parameters:**
  - `req`: Express request object containing updated user data.
  - `res`: Express response object.
  - `next`: Express next function to invoke the next middleware.
- **Returns:** JSON response with status and message upon successful information update.
