import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthService } from 'src/app/shared/services/auth.service';

export const loggedInGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  const jwtHelper = inject(JwtHelperService);
  if (authService.user()) {
    const access_token = localStorage.getItem('access_token');
    const isTokenExpired = jwtHelper.isTokenExpired(access_token);
    if (isTokenExpired) {
      router.navigate(['']);
    }
  }
  return !!authService.user();
};
