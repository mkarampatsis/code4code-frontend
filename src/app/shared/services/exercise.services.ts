import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IExercise } from "src/app/shared/interfaces/exercises";
import { IUserLanguageEvaluation } from 'src/app/shared/interfaces/user-evaluation';

@Injectable({
    providedIn: 'root',
  })
  export class ExerciseService {
    http = inject(HttpClient);
  
    getExercise(code: string): Observable<IExercise> {
        const url = `${environment.apiURL}/exercises/one/${code}`;
        return this.http.get<IExercise>(url);
    }

    getExercises(): Observable<IExercise[]> {
        const url = `${environment.apiURL}/exercises/all/python`;
        return this.http.get<IExercise[]>(url);
    }

    getEvaluationExercises(course: string): Observable<IUserLanguageEvaluation[]> {
        const url = `${environment.apiURL}/evaluation/questions/${course}`;
        return this.http.get<IUserLanguageEvaluation[]>(url);
    }
}