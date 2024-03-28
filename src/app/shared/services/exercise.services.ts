import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IExercise } from "../interfaces/exercises";

@Injectable({
    providedIn: 'root',
  })
  export class ExerciseService {
    http = inject(HttpClient);
  
    getExercise(code: string): Observable<IExercise> {
        const url = `${environment.apiURL}/${code}`;
        return this.http.get<IExercise>(url);
    }

    getExercises(): Observable<IExercise[]> {
        const url = `${environment.apiURL}/exercises/all/python`;
        return this.http.get<IExercise[]>(url);
    }
}