## Model Documentation

The following schema defines the structure of the "Product" model in the application.

### `ProductSchema`

- **Fields:**
  - `name`: String
    - **Description:** Name of the product.
    - **Required:** Yes
  - `description`: String
    - **Description:** Description of the product.
    - **Required:** Yes
  - `price`: Number
    - **Description:** Price of the product.
    - **Required:** Yes
  - `imageUrl`: String
    - **Description:** URL of the image associated with the product.
    - **Required:** Yes
  - `createdBy`: mongoose.Schema.Types.ObjectId (ref: 'User')
    - **Description:** ID of the user who created the product.
    - **Reference:** 'User' model
    - **Required:** No

### Model Name: `Product`
