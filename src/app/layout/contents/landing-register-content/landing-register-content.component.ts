import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
  effect,
  inject,
} from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { User } from 'src/app/shared/interfaces/user';
// import {AppState, id, firstName, name, email, photoUrl } from '@c4c/state';
// import { Store } from '@ngrx/store';
import { Subject, take, takeUntil } from 'rxjs';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'layout-landing-register-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './landing-register-content.component.html',
  styleUrl: './landing-register-content.component.css',
})
export class LandingRegisterContentComponent {
  @Output() registeredUser = new EventEmitter<Partial<User>>();

  authService = inject(AuthService);
  user$ = this.authService.user();
  name$ = this.user$.name;
  firstName$ = this.user$.firstName;
  photoUrl$ = this.user$.photoUrl;
  email$ = this.user$.email;

  id = '';

  done = new Subject();

  form = new FormGroup({
    email: new FormControl(
      { value: this.email$, disabled: true },
      Validators.required
    ),
    name: new FormControl(
      { value: this.name$, disabled: true },
      Validators.required
    ),
    category: new FormControl('', Validators.required),
  });

  onImageError(event: any) {
    event.target.src = '/assets/icons/user-account.svg';
  }

  onSubmit() {
    this.registeredUser.emit({ id: this.id, ...(this.form.value as User) });
  }
}
