import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
  inject,
} from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { User } from '@c4c/interfaces';
import { AppState, id, firstName, name, email, photoUrl } from '@c4c/state';
import { Store } from '@ngrx/store';
import { Subject, take, takeUntil } from 'rxjs';

@Component({
  selector: 'layout-landing-register-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './landing-register-form.component.html',
  styleUrl: './landing-register-form.component.css',
})
export class LandingRegisterFormComponent implements OnInit, OnDestroy {
  @Output() registeredUser = new EventEmitter<Partial<User>>();

  store = inject(Store<AppState>);

  id$ = this.store.select(id);
  name$ = this.store.select(name);
  firstName$ = this.store.select(firstName);
  email$ = this.store.select(email);
  photoUrl$ = this.store.select(photoUrl);

  id = '';

  done = new Subject();

  form = new FormGroup({
    email: new FormControl({ value: '', disabled: true }, Validators.required),
    name: new FormControl({ value: '', disabled: true }, Validators.required),
    category: new FormControl('', Validators.required),
  });

  ngOnInit(): void {
    this.id$.pipe(takeUntil(this.done)).subscribe((id) => (this.id = id ?? ''));
    this.email$
      .pipe(takeUntil(this.done))
      .subscribe((email) => this.form.get('email')?.setValue(email ?? ''));
    this.name$
      .pipe(takeUntil(this.done))
      .subscribe((name) => this.form.get('name')?.setValue(name ?? ''));
  }

  ngOnDestroy(): void {
    this.done.complete();
  }

  onImageError(event: any) {
    event.target.src = '/assets/icons/user-account.svg';
  }

  onSubmit() {
    this.registeredUser.emit({ id: this.id, ...(this.form.value as User) });
  }
}
