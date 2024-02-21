import { Component } from '@angular/core';
import {
  FacebookIconComponent,
  TwitterIconComponent,
  YoutubeIconComponent,
} from 'src/app/ui';

@Component({
  selector: 'layout-footer',
  standalone: true,
  imports: [FacebookIconComponent, TwitterIconComponent, YoutubeIconComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {}
