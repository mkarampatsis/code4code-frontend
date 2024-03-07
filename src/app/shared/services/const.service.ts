import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ConstService {
  USER_CATEGORIES = ['student', 'teacher', 'institution'];

  USER_COURSE = ['python', 'javascript'];

  USER_LEVEL = ['novice', 'beginner', 'intermediate', 'expert'];

  NUMBER_REGEX = /^[-+]?\d*\.?\d+$/;
}
