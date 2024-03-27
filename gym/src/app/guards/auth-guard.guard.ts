import { CanActivateFn, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const router: Router = inject(Router);
  const protectedRoutes: string[] = ['/dashboard', '/workouts', '/update-data', '/reset/:token', '/update-product/:id', '/my-cart', '/create-product'];
  const session = localStorage.getItem('user_id');

  if (protectedRoutes.includes(state.url) && !session) {
    alert('Please login first!');
    router.navigate(['/home']);
    return false;
  }

  return true;
};
