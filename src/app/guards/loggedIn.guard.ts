import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthService } from 'src/app/shared/services/auth.service';

export const loggedInGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const jwtHelper = inject(JwtHelperService);
  if (authService.user()) {
    const access_token = localStorage.getItem('accessToken');
    const isTokenExpired = jwtHelper.isTokenExpired(access_token);
    if (isTokenExpired) {
      authService.signOut();
    }
  }
  return !!authService.user();
};
