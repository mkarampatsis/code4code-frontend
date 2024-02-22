import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { User } from '@c4c/interfaces';
import { AppState, registerUser } from '@c4c/state';

import { LandingNavigationComponent } from '../shared/landing-navigation/landing-navigation.component';
import { LandingRegisterFormComponent } from '../landing-register-form/landing-register-form.component';
import { FooterComponent } from '../shared/footer/footer.component';

@Component({
  selector: 'layout-landing-register',
  standalone: true,
  imports: [
    LandingNavigationComponent,
    LandingRegisterFormComponent,
    FooterComponent,
  ],
  templateUrl: './landing-register.component.html',
  styleUrl: './landing-register.component.css',
})
export class LandingRegisterComponent {
  store = inject(Store<AppState>);

  onRegisteredUser(user: Partial<User>) {
    this.store.dispatch(registerUser({ user }));
  }
}
