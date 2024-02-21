import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AppState, loggedIn } from '@c4c/state';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';

export const loggedInGuard: CanActivateFn = (route, state) => {
  const store = inject(Store<AppState>);
  const router = inject(Router);
  const jwtHelper = inject(JwtHelperService);
  return store.select(loggedIn).pipe(
    map((isLoggedIn) => {
      const access_token = localStorage.getItem('access_token');
      const isTokenExpired = jwtHelper.isTokenExpired(access_token);
      if (!isLoggedIn || isTokenExpired) {
        router.navigate(['']);
      }
      return isLoggedIn;
    })
  );
};
