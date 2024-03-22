### Workout Model

The following schema defines the structure of the "Workout" model in the application.

#### `WorkoutSchema`

- **Fields:**
  - `name`: String
    - **Description:** Name of the workout.
    - **Required:** Yes
  - `category`: String
    - **Description:** Category of the workout.
    - **Required:** Yes
  - `duration`: Number
    - **Description:** Duration of the workout (in minutes).
    - **Required:** Yes
  - `createdBy`: String
    - **Description:** ID of the user who created the workout.
    - **Required:** Yes

- **Options:**
  - `timestamps`: true
    - **Description:** Automatically adds `createdAt` and `updatedAt` fields to the document.

#### Model Name: `Workout`
