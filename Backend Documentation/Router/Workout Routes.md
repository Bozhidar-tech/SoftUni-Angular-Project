### Workout Routes

These routes handle workout management.

#### `/create`

- **Method:** POST
- **Description:** Creates a new workout.
- **Middleware:** `verifyToken` (Authentication required)
- **Handler:** `createWorkout`

#### `/getAll`

- **Method:** GET
- **Description:** Retrieves all workouts of the authenticated user.
- **Middleware:** `verifyToken` (Authentication required)
- **Handler:** `getAllWorkouts`

#### `/:id`

- **Method:** DELETE
- **Description:** Deletes a workout by ID.
- **Middleware:** `verifyToken` (Authentication required)
- **Handler:** `deleteWorkoutById`
