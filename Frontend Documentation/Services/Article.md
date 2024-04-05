#### ArticleService Documentation

The `ArticleService` class provides methods to interact with articles, including fetching, creating, updating, and deleting articles.

##### Methods

###### `getAllArticles(): Observable<Article[]>`

Retrieves all articles from the server.

- **Returns:** An Observable of type `Article[]` representing the fetched articles.

###### `getArticleById(id: string): Observable<Article>`

Retrieves a specific article by its ID from the server.

- **Parameters:**
  - `id`: The ID of the article to retrieve.
    - Type: `string`
- **Returns:** An Observable of type `Article` representing the fetched article.

###### `createArticle(articleData: Article): Observable<Article>`

Creates a new article.

- **Parameters:**
  - `articleData`: The data of the article to create.
    - Type: `Article` (object representing an article)
- **Returns:** An Observable of type `Article` representing the created article.

###### `updateArticle(id: string, articleData: Article): Observable<Article>`

Updates an existing article.

- **Parameters:**
  - `id`: The ID of the article to update.
    - Type: `string`
  - `articleData`: The updated data of the article.
    - Type: `Article` (object representing an article)
- **Returns:** An Observable of type `Article` representing the updated article.

###### `deleteArticle(id: string): Observable<Article>`

Deletes an article by its ID.

- **Parameters:**
  - `id`: The ID of the article to delete.
    - Type: `string`
- **Returns:** An Observable of type `Article` representing the deleted article.
