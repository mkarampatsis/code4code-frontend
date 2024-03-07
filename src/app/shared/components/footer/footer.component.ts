import { Component } from '@angular/core';
import {
  FacebookIconComponent,
  TwitterIconComponent,
  YoutubeIconComponent,
} from 'src/app/shared/ui';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [FacebookIconComponent, TwitterIconComponent, YoutubeIconComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {}
