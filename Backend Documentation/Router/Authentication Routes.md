### Authentication Routes

The following routes handle authentication and user management.

#### `/register`

- **Method:** POST
- **Description:** Registers a new user.
- **Handler:** `register`

#### `/login`

- **Method:** POST
- **Description:** Logs in a user.
- **Handler:** `login`

#### `/register-admin`

- **Method:** POST
- **Description:** Registers a new admin user.
- **Handler:** `registerAdmin`

### Password Reset Routes

These routes handle password reset functionality.

#### `/send-email`

- **Method:** POST
- **Description:** Sends a password reset email to the user.
- **Handler:** `sendEmail`

#### `/reset-password`

- **Method:** POST
- **Description:** Resets the user's password.
- **Handler:** `resetPassword`

### User Information Routes

These routes are used for updating user information.

#### `/update-data`

- **Method:** PUT
- **Description:** Updates user information.
- **Middleware:** `verifyToken` (Authentication required)
- **Handler:** `updateData`
