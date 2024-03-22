## Function Documentation

The following functions are responsible for user authentication, registration, password reset, and data management.

### register

- Description: Registers a new user by hashing the password and saving user details to the database.
- Parameters:
  - req: Express request object containing user registration data.
  - res: Express response object.
  - next: Express next function to invoke the next middleware.
- Returns: Calls the next middleware with a success message upon successful registration.
### registerAdmin

- Description: Registers a new admin user by hashing the password, setting isAdmin to true, and saving user details to the database.
- Parameters:
  - req: Express request object containing admin registration data.
  - res: Express response object.
  - next: Express next function to invoke the next middleware.
- Returns: Calls the next middleware with a success message upon successful admin registration.
### login

- Description: Logs in a user by comparing the provided email and password with the database records, generates a JWT token upon successful authentication, and returns the token along with user data.
- Parameters:
  - req: Express request object containing user login data.
  - res: Express response object.
  - next: Express next function to invoke the next middleware.
- Returns: JSON response with status, message, user data, and JWT token upon successful login.
### sendEmail

- Description: Sends an email to the user for password reset, generates a JWT token for password reset, and saves the token to the database.
- Parameters:
  - req: Express request object containing user email for password reset.
  - res: Express response object.
  - next: Express next function to invoke the next middleware.
- Returns: Calls the next middleware with a success message upon successful email sending.
### resetPassword

- Description: Resets the user's password using the provided token, verifies the token validity, updates the password in the database, and returns a success message.
- Parameters:
  - req: Express request object containing the reset token and new password.
  - res: Express response object.
  - next: Express next function to invoke the next middleware.
- Returns: Calls the next middleware with a success message upon successful password reset.
### updateData

- Description: Updates the user's information such as name, email, phone number, and password.
- Parameters:
  - req: Express request object containing updated user data.
  - res: Express response object.
  - next: Express next function to invoke the next middleware.
- Returns: JSON response with status and success message upon successful information update.
