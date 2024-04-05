## Function Documentation

The following functions handle article management within the application.

### `getAllArticles`

- **Description:** Retrieves all articles.
- **Parameters:**
  - `req`: Express request object.
  - `res`: Express response object.
- **Returns:** JSON response with status, message, and array of articles upon successful retrieval.

### `getArticleById`

- **Description:** Retrieves an article by ID.
- **Parameters:**
  - `req`: Express request object containing the article ID.
  - `res`: Express response object.
- **Returns:** JSON response with status, message, and article data upon successful retrieval, or error message if article is not found.

### `createArticle`

- **Description:** Creates a new article.
- **Parameters:**
  - `req`: Express request object containing article details.
  - `res`: Express response object.
  - `next`: Express next function to invoke the next middleware.
- **Returns:** JSON response with status, message, and newly created article data upon successful creation, or error message if creation fails.

### `updateArticleById`

- **Description:** Updates an article by ID.
- **Parameters:**
  - `req`: Express request object containing the updated article data.
  - `res`: Express response object.
- **Returns:** JSON response with status, message, and updated article data upon successful update, or error message if update fails.

### `deleteArticleById`

- **Description:** Deletes an article by ID.
- **Parameters:**
  - `req`: Express request object containing the article ID.
  - `res`: Express response object.
- **Returns:** JSON response with status, message, and deleted article data upon successful deletion, or error message if deletion fails.
