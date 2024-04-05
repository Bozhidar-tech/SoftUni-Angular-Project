### Article Routes

The following routes handle article-related operations.

#### `/getAll`

- **Method:** GET
- **Description:** Retrieves all articles.
- **Handler:** `getAllArticles`

#### `/:id`

- **Method:** GET
- **Description:** Retrieves an article by ID.
- **Handler:** `getArticleById`

#### `/create`

- **Method:** POST
- **Description:** Creates a new article.
- **Middleware:** `verifyToken` (Authentication required), `verifyAdmin` (Admin authorization required)
- **Handler:** `createArticle`

#### `/:id`

- **Method:** PUT
- **Description:** Updates an article by ID.
- **Middleware:** `verifyToken` (Authentication required), `verifyAdmin` (Admin authorization required)
- **Handler:** `updateArticleById`

#### `/:id`

- **Method:** DELETE
- **Description:** Deletes an article by ID.
- **Middleware:** `verifyToken` (Authentication required), `verifyAdmin` (Admin authorization required)
- **Handler:** `deleteArticleById`
