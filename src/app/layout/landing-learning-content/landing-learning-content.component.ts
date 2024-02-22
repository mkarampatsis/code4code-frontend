import { Component } from '@angular/core';
import { ButtonVideoComponent } from 'src/app/shared/ui';

@Component({
  selector: 'layout-landing-learning-content',
  standalone: true,
  imports: [ButtonVideoComponent],
  templateUrl: './landing-learning-content.component.html',
  styleUrl: './landing-learning-content.component.css',
})
export class LandingLearningContentComponent {}
