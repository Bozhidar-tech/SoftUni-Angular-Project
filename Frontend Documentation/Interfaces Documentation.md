### Interface Documentation

The following interface represents the interfaces in my project.

#### CartItem Interface

- **`product`**: `Product`
  - Description: The product associated with the cart item.
  
- **`quantity`**: `number`
  - Description: The quantity of the product in the cart.

#### Login Interface

- **`token`**: `string`
  - Description: The authentication token received upon successful login.
  
- **`email`**: `string`
  - Description: The email address associated with the user account.
  
- **`password`**: `string`
  - Description: The password associated with the user account.

#### Product Interface

- **`_id`**: `string`
  - Description: The unique identifier of the product.
  
- **`name`**: `string`
  - Description: The name of the product.
  
- **`description`**: `string`
  - Description: The description of the product.
  
- **`price`**: `number`
  - Description: The price of the product.
  
- **`imageUrl`**: `string`
  - Description: The URL of the image associated with the product.
  
- **`createdBy`**: `string`
  - Description: The creator of the product.

#### Register Interface

- **`fullName`**: `string`
  - Description: The full name of the user.
  
- **`username`**: `string`
  - Description: The username chosen by the user.
  
- **`email`**: `string`
  - Description: The email address provided by the user for registration.
  
- **`phoneNumber`**: `string`
  - Description: The phone number of the user.
  
- **`password`**: `string`
  - Description: The password chosen by the user for registration.
  
- **`repeatPassword`**: `string`
  - Description: The repeated password for confirmation.

#### UpdateUser Interface

- **`userId`**: `string`
  - Description: The unique identifier of the user whose information is being updated.
  
- **`fullName`**: `string` (optional)
  - Description: The updated full name of the user.
  
- **`email`**: `string`
  - Description: The updated email address of the user.
  
- **`phoneNumber`**: `string` (optional)
  - Description: The updated phone number of the user.
  
- **`password`**: `string` (optional)
  - Description: The updated password chosen by the user.
  
- **`repeatPassword`**: `string` (optional)
  - Description: The repeated password for confirmation.

#### User Interface

- **`_id`**: `string`
  - Description: The unique identifier of the user.
  
- **`tel`**: `string`
  - Description: The telephone number of the user.
  
- **`email`**: `string`
  - Description: The email address of the user.
  
- **`username`**: `string`
  - Description: The username of the user.
  
- **`password`**: `string`
  - Description: The password of the user.
  
- **`created_at`**: `string`
  - Description: The date and time when the user account was created.

#### UserForAuth Interface

- **`firstName`**: `string`
  - Description: The first name of the user.
  
- **`email`**: `string`
  - Description: The email address of the user.
  
- **`phoneNumber`**: `string`
  - Description: The phone number of the user.
  
- **`password`**: `string`
  - Description: The password of the user.
  
- **`id`**: `string`
  - Description: The unique identifier of the user.

#### Workout Interface

- **`_id`**: `string`
  - Description: The unique identifier of the workout.
  
- **`name`**: `string`
  - Description: The name of the workout.
  
- **`category`**: `string`
  - Description: The category of the workout (e.g., cardio, strength training, etc.).
  
- **`duration`**: `number`
  - Description: The duration of the workout in minutes.
  
- **`createdBy`**: `string`
  - Description: The ID of the user who created the workout.
  
- **`created_at`**: `string`
  - Description: The date and time when the workout was created.
 
#### Membership Interface

- **`title`**: `string`
  - **Description:** The title of the membership.

- **`features`**: `string[]`
  - **Description:** An array containing the features included in the membership.

- **`price`**: `string`
  - **Description:** The price of the membership.

- **`link`**: `string`
  - **Description:** The link associated with the membership.

#### Exercise Interface

- **`name`**: `string`
  - Description: The name of the exercise.

- **`description`**: `string`
  - Description: Description of the exercise.

- **`videoUrl`**: `string`
  - Description: URL of the video demonstrating the exercise.

- **`bodyPart`**: `string`
  - Description: The body part targeted by the exercise.

#### Article Interface

- **`_id`**: `string`
  - Description: The unique identifier for the article.

- **`title`**: `string`
  - Description: The title of the article.

- **`content`**: `string`
  - Description: The main content or body of the article.

- **`author`**: `string`
  - Description: The author of the article.

- **`createdAt`**: `Date`
  - Description: The date and time when the article was created.

- **`tags`**: `string[]`
  - Description: An array of tags associated with the article.

- **`comments`**: `string[]`
  - Description: An array of comments associated with the article.
