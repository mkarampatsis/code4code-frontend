import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IExercise } from "src/app/shared/interfaces/exercises";
import { IUserLanguageEvaluation, IUserTraining } from 'src/app/shared/interfaces/user-evaluation';
import { IUserAssessment } from 'src/app/shared/interfaces/user'

@Injectable({
    providedIn: 'root',
  })
  export class ExerciseService {
    http = inject(HttpClient);
  
    trainingExercises = signal(<IUserTraining | null>null);
    exercise$ = signal(<IExercise>null);
    
    getExercise(code: string): Observable<IExercise> {
        const url = `${environment.apiURL}/exercises/one/${code}`;
        return this.http.get<IExercise>(url);
    }

    getExercises(course: string): Observable<IExercise[]> {
        const url = `${environment.apiURL}/exercises/all/${course}`;
        return this.http.get<IExercise[]>(url);
    }

    getEvaluationExercises(course: string): Observable<IUserLanguageEvaluation[]> {
        const url = `${environment.apiURL}/evaluation/questions/${course}`;
        return this.http.get<IUserLanguageEvaluation[]>(url);
    }

    postUserAssement(data: Object): Observable<IUserAssessment> {
        const url = `${environment.apiURL}/ml/user_assesment`;
        return this.http.post<IUserAssessment>(url, data);
    }

    getLearnerExercise(course: string): Observable<IExercise> {
        const url = `${environment.apiURL}/exercises/learner/${course}`;
        return this.http.get<IExercise>(url);
    }

    postUsersTraining(data:any): Observable<IUserTraining> {
        const url = `${environment.apiURL}/evaluation/training`;
        return this.http.post<IUserTraining>(url, data);
    }

    getUsersTrainingExercises(email:string): Observable<IUserTraining[]> {
        const url = `${environment.apiURL}/evaluation/training/${email}`;
        return this.http.get<IUserTraining[]>(url);
    }

    setTrainingExerciseEvaluation(data:any): Observable<IUserTraining> {
        const url = `${environment.apiURL}/exercises/training/exercise/evaluation`;
        return this.http.patch<IUserTraining>(url, data);
    }
}