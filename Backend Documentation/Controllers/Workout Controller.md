## Function Documentation

The following functions are responsible for managing user workouts within the application.

### `createWorkout`

- **Description:** Creates a new workout and saves it to the database.
- **Parameters:**
  - `req`: Express request object containing workout details.
  - `res`: Express response object.
  - `next`: Express next function to invoke the next middleware.
- **Returns:** JSON response with status, message, and created workout data upon successful creation.

### `getAllWorkouts`

- **Description:** Retrieves all workouts associated with the current user from the database.
- **Parameters:**
  - `req`: Express request object.
  - `res`: Express response object.
- **Returns:** JSON response with status, message, and array of user workouts upon successful retrieval. Returns 401 status if user information is missing.

### `deleteWorkoutById`

- **Description:** Deletes a workout by its ID.
- **Parameters:**
  - `req`: Express request object containing workout ID in the URL params.
  - `res`: Express response object.
- **Returns:** JSON response with status, message, and deleted workout data upon successful deletion. Returns 404 status if the workout is not found.
