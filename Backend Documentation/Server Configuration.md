## Server Configuration and Middleware Documentation

This documentation outlines the configuration and middleware used in the server application.

### Express Application Setup

- **Description:** Configures the Express application with required middleware and routes.

- **Middleware Used:**
  - `cors`: Enables Cross-Origin Resource Sharing (CORS).
  - `express.json()`: Parses incoming request bodies in JSON format.
  - `cookieParser`: Parses cookies attached to the request headers.

### Database Connection

- **Description:** Establishes a connection to the MongoDB database.

- **Behavior:**
  - Attempts to connect to the MongoDB database using the provided connection string (`process.env.MONGO_URL`).

### Routes

- **Description:** Defines the routes used in the application.

- **Routes:**
  - `/api/auth`: Authentication-related routes.
  - `/api/workout`: Routes for managing workouts.
  - `/api/product`: Routes for managing products.

### Server Startup

- **Description:** Starts the Express server.

- **Behavior:**
  - Calls the `connectMongoDB` function to establish a connection to the database.
  - Listens for incoming HTTP requests on port 3000.

