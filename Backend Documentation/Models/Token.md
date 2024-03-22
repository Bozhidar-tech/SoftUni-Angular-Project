### Token Model

The following schema defines the structure of the "Token" model in the application.

#### `TokenSchema`

- **Fields:**
  - `userId`: ObjectId
    - **Description:** The ID of the user associated with the token.
    - **Required:** Yes
    - **Reference:** User
  - `token`: String
    - **Description:** The token string.
    - **Required:** Yes
  - `createdAt`: Date
    - **Description:** The timestamp when the token was created.
    - **Default:** Current date and time
    - **Expiration:** 5 minutes (300 seconds)

#### Model Name: `Token`
