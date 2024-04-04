import { CanActivateFn, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {

  // Inject Router Service
  const router: Router = inject(Router);

  // Define the protected routes
  const protectedRoutes: string[] = ['/dashboard', '/workouts', '/update-data', '/reset/:token', '/update-product/:id', '/my-cart', '/create-product', '/create-article', '/update-article/:id', '/strength-training'];

  // Check if the user is logged in
  const session = localStorage.getItem('user_id');

  // Check if the requested route is protected and if the user is logged in
  if (protectedRoutes.includes(state.url) && !session) {
    
    // Display alert if the route is protected
    alert('Please login first!');

    // Redirect to the home page
    router.navigate(['/home']);

    // Deny access to the route
    return false;
  }

  // Allow access to the route
  return true;
};
