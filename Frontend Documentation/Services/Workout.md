#### WorkoutService Documentation

The `WorkoutService` class provides methods to manage user workouts, including creating new workouts, retrieving existing ones, and deleting workouts.

##### Methods

###### `createWorkoutService(workout: Workout): Observable<Workout>`

Creates a new workout.

- **Parameters:**
  - `workout`: The workout object to be created.
    - Type: `Workout` (object representing the workout data).

- **Returns:** An Observable emitting the created `Workout` object.

###### `getWorkoutsService(): Observable<Workout[]>`

Retrieves all workouts associated with the current user.

- **Returns:** An Observable emitting an array of `Workout` objects.

###### `deleteWorkoutById(id: string): Observable<Workout>`

Deletes a workout by its ID.
