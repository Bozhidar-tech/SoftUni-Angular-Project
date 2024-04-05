#### AuthGuard Function Documentation

The `authGuard` function is a custom Angular route guard responsible for restricting access to protected routes based on user authentication status.

##### Parameters

- `route: ActivatedRouteSnapshot`: An Angular ActivatedRouteSnapshot object representing the current route being activated.
- `state: RouterStateSnapshot`: An Angular RouterStateSnapshot object representing the state of the router at the time of activation.

##### Returns

- Type: `boolean`
- Description: Returns `true` if access to the route is allowed, and `false` if access is denied.

##### Behavior

- The `authGuard` function checks if the requested route is among the protected routes defined in `protectedRoutes`.
- It also verifies if the user is logged in by checking the presence of a session token in the local storage.
- If the requested route is protected and the user is not logged in, it displays an alert and redirects the user to the home page.
- If the user is logged in and tries to access the login page, it redirects the user to the dashboard.
- Otherwise, it allows access to other routes.

