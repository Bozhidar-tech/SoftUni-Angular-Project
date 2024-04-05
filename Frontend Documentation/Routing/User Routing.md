### Routing Configuration

The following routing configuration defines the paths and corresponding components used in the application:

##### Routes

- **Path:** `/login`
  - **Component:** `LoginComponent`
  - **Description:** Displays the login page.
  - **Guard:** `authGuard` (Authentication required)

- **Path:** `/register`
  - **Component:** `RegisterComponent`
  - **Description:** Displays the registration page.

- **Path:** `/dashboard`
  - **Component:** `DashboardComponent`
  - **Description:** Displays the user dashboard.
  - **Guard:** `authGuard` (Authentication required)

- **Path:** `/reset/:token`
  - **Component:** `ResetComponent`
  - **Description:** Component used for password reset functionality, with a token parameter in the URL.
  - **Guard:** `authGuard` (Authentication required)

- **Path:** `/forgot-password`
  - **Component:** `ForgotPasswordComponent`
  - **Description:** Displays the forgot password page.

- **Path:** `/workouts`
  - **Component:** `WorkoutsComponent`
  - **Description:** Displays the workouts page.
  - **Guard:** `authGuard` (Authentication required)

- **Path:** `/update-data`
  - **Component:** `UpdateDataComponent`
  - **Description:** Displays the update data page.
  - **Guard:** `authGuard` (Authentication required)

- **Path:** `/nutrition`
  - **Component:** `NutritionComponent`
  - **Description:** Displays the nutrition page.

- **Path:** `/create-article`
  - **Component:** `CreateArticleComponent`
  - **Description:** Component for creating a new article.
  - **Guard:** `authGuard` (Authentication required)

- **Path:** `/update-article/:id`
  - **Component:** `UpdateArticleComponent`
  - **Description:** Component for updating an existing article.
  - **Guard:** `authGuard` (Authentication required)

- **Path:** `/strength-training`
  - **Component:** `StrengthTrainingComponent`
  - **Description:** Displays the strength training page.
  - **Guard:** `authGuard` (Authentication required)

