## Function Documentation

The following functions are responsible for product management within the application.

### `createProduct`

- **Description:** Creates a new product and saves it to the database.
- **Parameters:**
  - `req`: Express request object containing product details.
  - `res`: Express response object.
  - `next`: Express next function to invoke the next middleware.
- **Returns:** JSON response with status, message, and created product data upon successful creation.

### `getAllProducts`

- **Description:** Retrieves all products from the database.
- **Parameters:**
  - `req`: Express request object.
  - `res`: Express response object.
- **Returns:** JSON response with status, message, and array of products upon successful retrieval.

### `updateProductById`

- **Description:** Updates an existing product by its ID.
- **Parameters:**
  - `req`: Express request object containing product ID in the URL params and updated product data in the request body.
  - `res`: Express response object.
- **Returns:** JSON response with updated product data upon successful update. Returns 404 status if the product is not found.

### `deleteProductById`

- **Description:** Deletes a product by its ID.
- **Parameters:**
  - `req`: Express request object containing product ID in the URL params.
  - `res`: Express response object.
- **Returns:** JSON response with status, message, and deleted product data upon successful deletion. Returns 404 status if the product is not found.
