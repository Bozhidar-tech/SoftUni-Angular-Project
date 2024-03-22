## Error and Success Utility Functions Documentation

These utility functions help in creating error and success responses.

### `CreateError`

- **Parameters:**
  - `status`: Number - HTTP status code of the error.
  - `message`: String - Error message.

- **Returns:** Error object with specified status and message.

### `CreateSuccess`

- **Parameters:**
  - `statusCode`: Number - HTTP status code of the success response.
  - `successMessage`: String - Success message.
  - `data`: Optional - Additional data to include in the success response.

- **Returns:** Object containing status, message, and optional data, representing a success response.
