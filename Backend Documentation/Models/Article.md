## Article Schema Documentation

The following schema defines the structure of the "Article" model in the application.

### `ArticleSchema`

- **Fields:**
  - `title`: String
    - **Description:** Title of the article.
    - **Required:** Yes
  - `content`: String
    - **Description:** Content of the article.
    - **Required:** Yes
  - `author`: String
    - **Description:** Author of the article.
    - **Required:** Yes
  - `createdAt`: Date
    - **Description:** Date and time when the article was created.
    - **Default:** Current date and time if not provided.
  - `tags`: Array of Strings
    - **Description:** Tags associated with the article.
    - **Type:** String[]
  - `comments`: Array of ObjectIds (ref: 'Comment')
    - **Description:** IDs of comments associated with the article.
    - **Reference:** 'Comment' model
    - **Type:** mongoose.Schema.Types.ObjectId[]
    - **Required:** No

### Model Name: `Article`
