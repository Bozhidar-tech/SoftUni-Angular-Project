### `UserSchema`

- **Fields:**
  - `fullName`: String
    - **Description:** Full name of the user.
    - **Required:** Yes
  - `username`: String
    - **Description:** Username of the user.
    - **Required:** Yes
    - **Unique:** Yes
  - `email`: String
    - **Description:** Email address of the user.
    - **Required:** Yes
    - **Unique:** Yes
  - `phoneNumber`: String
    - **Description:** Phone number of the user.
    - **Required:** Yes
  - `password`: String
    - **Description:** Password of the user.
    - **Required:** Yes
  - `isAdmin`: Boolean
    - **Description:** Indicates whether the user is an admin.
    - **Default:** false

- **Options:**
  - `timestamps`: true
    - **Description:** Automatically adds `createdAt` and `updatedAt` fields to the document.

### Model Name: `User`
