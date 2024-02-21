import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AppState, loggedIn } from '@c4c/state';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';

export const registerGuard: CanActivateFn = (route, state) => {
  const store = inject(Store<AppState>);
  const router = inject(Router);
  return store.select(loggedIn).pipe(
    map((isLoggedIn) => {
      if (!isLoggedIn) {
        router.navigate(['']);
      }
      return isLoggedIn;
    })
  );
};
