import { Injectable, inject, signal } from '@angular/core';
import { SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  socialAuthService = inject(SocialAuthService);
  http = inject(HttpClient);
  router = inject(Router);

  user = signal(<SocialUser | null>null);

  constructor() {
    this.socialAuthService.authState.subscribe((user) => {
      if (user) {
        const { idToken } = user;
        this.http
          .post<{ accessToken: string }>(
            `${environment.apiURL}/auth/google-auth`,
            { idToken }
          )
          .subscribe({
            next: (response) => {
              const { accessToken } = response;
              localStorage.setItem('accessToken', accessToken);
              this.user.set(user);
              this.router.navigate(['c4c', 'register']);
            },
            error: (error) => {
              console.error(error);
            },
          });
      }
    });
  }

  signOut() {
    this.socialAuthService.signOut();
    this.user.set(null);
    localStorage.removeItem('accessToken');
  }
}
