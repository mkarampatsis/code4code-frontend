import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Subject } from 'rxjs';
import { User } from 'src/app/shared/interfaces/user';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-landing-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './landing-register.component.html',
  styleUrl: './landing-register.component.css',
})
export class LandingRegisterComponent {
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
      Validators.required,
    ),
    name: new FormControl(
      { value: this.name$, disabled: true },
      Validators.required,
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
