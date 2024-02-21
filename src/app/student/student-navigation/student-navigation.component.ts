import {
  Component,
  ElementRef,
  Renderer2,
  ViewChild,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from 'src/app/shared/services/auth.service';
@Component({
  selector: 'app-student-navigation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './student-navigation.component.html',
  styleUrl: './student-navigation.component.css',
})
export class StudentNavigationComponent {
  service = inject(AuthService);
  currentUser$ = this.service.user();
  photoUrl$ = this.currentUser$.photoUrl;

  @ViewChild('mobileMenu') mobileMenu!: ElementRef;
  mobileMenuRef!: ElementRef;
  renderer = inject(Renderer2);

  ngAfterViewInit(): void {
    this.mobileMenuRef = this.mobileMenu.nativeElement;
  }

  onBurgerClick() {
    console.log('burger clicked');
    this.renderer.removeClass(this.mobileMenuRef, 'hidden');
  }

  onBurgerIconCloseClick() {
    this.renderer.addClass(this.mobileMenuRef, 'hidden');
  }

  logout() {
    this.service.signOut();
  }

  onImageError(event: any) {
    event.target.src = '/assets/icons/user-account.svg';
  }
}
