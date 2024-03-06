import { Component } from '@angular/core';
import { LandingNavigationComponent } from '../shared/landing-navigation/landing-navigation.component';
import { LandingLearningContentComponent } from '../contents/landing-learning-content/landing-learning-content.component';
import { FooterComponent } from '../shared/footer/footer.component';

@Component({
  selector: 'layout-landing-learning',
  standalone: true,
  imports: [
    LandingNavigationComponent,
    LandingLearningContentComponent,
    FooterComponent,
  ],
  templateUrl: './landing-learning.component.html',
  styleUrl: './landing-learning.component.css',
})
export class LandingLearningComponent {}
