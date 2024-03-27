### Services
  #### AuthService Documentation

The `AuthService` class provides methods to handle user authentication-related tasks such as registration, login, password recovery, and user data management.

##### Methods

###### `registerService(registerObj: Register): Observable<Register>`

Registers a new user.

- **Parameters:**
  - `registerObj`: The registration information of the user.
    - Type: `Register` (interface representing user registration data).
  
- **Returns:** An Observable emitting the registration response.

###### `loginService(loginObj: Login): Observable<Login>`

Logs in an existing user.

- **Parameters:**
  - `loginObj`: The login credentials of the user.
    - Type: `Login` (interface representing user login data).

- **Returns:** An Observable emitting the login response.

###### `sendEmailService(email: string)`

Sends an email for password reset.

- **Parameters:**
  - `email`: The email address of the user requesting password reset.
    - Type: `string`

- **Returns:** An Observable emitting the response of the email sending operation.

###### `resetPasswordService(resetObj: any)`

Resets the password of the user.

- **Parameters:**
  - `resetObj`: The reset password information.
    - Type: `any`

- **Returns:** An Observable emitting the response of the password reset operation.

###### `updateService(dataObj: UpdateUser): Observable<UpdateUser>`

Updates user data.

- **Parameters:**
  - `dataObj`: The updated user data.
    - Type: `UpdateUser` (interface representing updated user data).

- **Returns:** An Observable emitting the updated user data response.

###### `isLoggedIn(): boolean`

Checks if the user is logged in.

- **Returns:** `true` if the user is logged in, otherwise `false`.

#### CartService Documentation

The `CartService` class provides methods to manage the shopping cart, including adding items, clearing the cart, updating item quantities, and retrieving cart items.

##### Methods

###### `getCartItems(): CartItem[]`

Retrieves the cart items from the browser's local storage.

- **Returns:** An array of `CartItem` objects representing the items in the cart.

###### `addToCart(cartItem: CartItem): void`

Adds a new item to the cart.

- **Parameters:**
  - `cartItem`: The item to be added to the cart.
    - Type: `CartItem` (object representing a cart item).

###### `clearCart(): void`

Clears all items from the cart.

###### `updateCart(cartItems: CartItem[]): void`

Updates the cart with the specified array of cart items.

- **Parameters:**
  - `cartItems`: The updated array of cart items.
    - Type: `CartItem[]` (array of objects representing cart items).

###### `incrementCartItemQuantity(index: number): void`

Increments the quantity of a specific item in the cart.

- **Parameters:**
  - `index`: The index of the item in the cart array.
    - Type: `number`

###### `decrementCartItemQuantity(index: number): void`

Decrements the quantity of a specific item in the cart.

#### ShopService Documentation

The `ShopService` class provides methods to interact with the product catalog, including fetching products from the server, creating new products, updating existing ones, and deleting products.

##### Methods

###### `getAllProducts(): Observable<Product[]>`

Retrieves all products from the server.

- **Returns:** An Observable emitting an array of `Product` objects.

###### `createProduct(productData: Product): Observable<Product>`

Creates a new product.

- **Parameters:**
  - `productData`: The data of the product to be created.
    - Type: `Product` (object representing product data).

- **Returns:** An Observable emitting the created `Product` object.

###### `updateProduct(id: string, productData: Product): Observable<Product>`

Updates an existing product.

- **Parameters:**
  - `id`: The ID of the product to be updated.
    - Type: `string`
  - `productData`: The updated data of the product.
    - Type: `Product` (object representing updated product data).

- **Returns:** An Observable emitting the updated `Product` object.

###### `deleteProduct(id: string): Observable<any>`

Deletes a product.

- **Parameters:**
  - `id`: The ID of the product to be deleted.
    - Type: `string`

- **Returns:** An Observable emitting the response of the delete operation.


- **Parameters:**
  - `index`: The index of the item in the cart array.
    - Type: `number`
   
#### WorkoutService Documentation

The `WorkoutService` class provides methods to manage user workouts, including creating new workouts, retrieving existing ones, and deleting workouts.

##### Methods

###### `createWorkoutService(workout: Workout): Observable<Workout>`

Creates a new workout.

- **Parameters:**
  - `workout`: The workout object to be created.
    - Type: `Workout` (object representing the workout data).

- **Returns:** An Observable emitting the created `Workout` object.

###### `getWorkoutsService(): Observable<Workout[]>`

Retrieves all workouts associated with the current user.

- **Returns:** An Observable emitting an array of `Workout` objects.

###### `deleteWorkoutById(id: string): Observable<Workout>`

Deletes a workout by its ID.

#### MembershipService Documentation

The `MembershipService` class provides methods to manage memberships, including retrieving all memberships available.

##### Methods

###### `getAllMemberships(): Observable<Membership[]>`

Retrieves all memberships available.

- **Returns:** An Observable emitting an array of `Membership` objects.


- **Parameters:**
  - `id`: The ID of the workout to be deleted.
    - Type: `string`

- **Returns:** An Observable emitting the deleted `Workout` object.
