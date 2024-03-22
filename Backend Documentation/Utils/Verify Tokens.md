## Authentication Middleware Documentation

These middleware functions handle user authentication and authorization.

### `verifyToken`

- **Description:** Verifies the authenticity of the provided JWT token in the request header.

- **Parameters:**
  - `req`: Request object.
  - `res`: Response object.
  - `next`: Next middleware function.

- **Behavior:**
  - Parses the JWT token from the request header.
  - Verifies the token using the secret key.
  - If the token is valid, sets the authenticated user information in the request object.
  - If the token is invalid or missing, triggers an authentication error.

### `verifyUser`

- **Description:** Verifies if the authenticated user is the same as the user associated with the requested resource or if the user is an admin.

- **Parameters:**
  - `req`: Request object.
  - `res`: Response object.
  - `next`: Next middleware function.

- **Behavior:**
  - Calls `verifyToken` to authenticate the user.
  - Checks if the authenticated user ID matches the requested resource ID or if the user is an admin.
  - If the user is authorized, proceeds to the next middleware function.
  - If the user is not authorized, triggers an authorization error.

### `verifyAdmin`

- **Description:** Verifies if the authenticated user is an admin.

- **Parameters:**
  - `req`: Request object.
  - `res`: Response object.
  - `next`: Next middleware function.

- **Behavior:**
  - Calls `verifyToken` to authenticate the user.
  - Checks if the authenticated user is an admin.
  - If the user is an admin, proceeds to the next middleware function.
  - If the user is not an admin, triggers an authorization error.
