# Authentication Guard

## Overview
The `authGuard` function is an Angular routing guard designed to restrict access to certain routes based on user authentication status.

## API Documentation

### `authGuard(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean`

Checks whether the user is authenticated before allowing access to the requested route.

#### Parameters
- `route: ActivatedRouteSnapshot`: The route being activated.
- `state: RouterStateSnapshot`: The current router state.

#### Returns
- `boolean`: `true` if the user is authenticated and can access the route, otherwise `false`.

### Implementation Details
- The `authGuard` function checks if the requested route is in the list of protected routes and if the user is authenticated.
- If the user is not authenticated and the route is protected, it displays an alert prompting the user to log in and redirects them to the home page.
- If the user is authenticated or the route is not protected, it allows access to the requested route.
