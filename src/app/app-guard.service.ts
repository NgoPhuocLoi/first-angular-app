import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import AuthService from '../services/auth.service';

export const canActivateFn: CanActivateFn = async (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const router = inject(Router);
  const authService = inject(AuthService);
  // const loggedIn = await authService.isAuthenticated();
  const loggedIn = true;
  if (loggedIn) return true;
  return router.parseUrl('/');
};
