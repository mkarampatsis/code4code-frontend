import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LandingNavigationComponent } from '../shared/landing-navigation/landing-navigation.component';
import { LandingAuthoringToolContentComponent } from '../contents/landing-authoring-tool-content/landing-authoring-tool-content.component';
import { FooterComponent } from '../shared/footer/footer.component';

@Component({
  selector: 'layout-landing-authoring-tool',
  standalone: true,
  imports: [
    CommonModule,
    LandingNavigationComponent,
    LandingAuthoringToolContentComponent,
    FooterComponent,
  ],
  templateUrl: './landing-authoring-tool.component.html',
  styleUrl: './landing-authoring-tool.component.css',
})
export class LandingAuthoringToolComponent {}
