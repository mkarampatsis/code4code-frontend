import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthService } from './shared/services/auth.service';
import { LandingNavigationComponent } from 'src/app/shared/components/landing-navigation/landing-navigation.component';
import { FooterComponent } from 'src/app/shared/components/footer/footer.component';
import { UserNavigationComponent } from 'src/app/shared/components/user-navigation/user-navigation.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    LandingNavigationComponent,
    UserNavigationComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  authService = inject(AuthService);
  user = this.authService.user;
}
