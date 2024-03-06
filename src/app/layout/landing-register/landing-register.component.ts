import { Component, inject } from '@angular/core';
import { User } from 'src/app/shared/interfaces/user';

import { LandingNavigationComponent } from '../shared/landing-navigation/landing-navigation.component';
import { LandingRegisterContentComponent } from '../contents/landing-register-content/landing-register-content.component';
import { FooterComponent } from '../shared/footer/footer.component';

@Component({
  selector: 'layout-landing-register',
  standalone: true,
  imports: [
    LandingNavigationComponent,
    LandingRegisterContentComponent,
    FooterComponent,
  ],
  templateUrl: './landing-register.component.html',
  styleUrl: './landing-register.component.css',
})
export class LandingRegisterComponent {
  onRegisteredUser(user: Partial<User>) {
    // this.store.dispatch(registerUser({ user }));
  }
}
