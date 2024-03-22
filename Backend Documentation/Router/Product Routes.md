### Product Routes

These routes handle product management.

#### `/create`

- **Method:** POST
- **Description:** Creates a new product.
- **Middleware:** `verifyToken` (Authentication required)
- **Handler:** `createProduct`

#### `/getAll`

- **Method:** GET
- **Description:** Retrieves all products.
- **Handler:** `getAllProducts`

#### `/:id`

- **Method:** PUT
- **Description:** Updates a product by ID.
- **Middleware:** `verifyToken` (Authentication required)
- **Handler:** `updateProductById`

#### `/:id`

- **Method:** DELETE
- **Description:** Deletes a product by ID.
- **Middleware:** `verifyToken` (Authentication required)
- **Handler:** `deleteProductById`
