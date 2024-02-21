import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonVideoComponent } from 'src/app/ui';
import { TileVideoComponent } from 'src/app/ui/tile-video/tile-video.component';

@Component({
  selector: 'layout-landing-content',
  standalone: true,
  imports: [CommonModule, RouterLink, TileVideoComponent, ButtonVideoComponent],
  templateUrl: './landing-content.component.html',
  styleUrl: './landing-content.component.css',
})
export class LandingContentComponent {}
