import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { IUser, IUserEvaluation } from '../interfaces/user';
import { AuthService } from 'src/app/shared/services/auth.service';

@Injectable({
    providedIn: 'root',
})

export class UserEvaluationService {
    authService = inject(AuthService);
    user = this.authService.user();
    
    http = inject(HttpClient);
    router = inject(Router);
    
    setUserEvaluation(req: IUserEvaluation) {
        return this.http.patch<{ user: IUser; msg: string }>(
            `${environment.apiURL}/evaluation/user_evaluation`,req,);
    }

    pythonEvalution(){
        const evaluation = this.user
            .evaluations.filter((data) => {
                    return data.course === 'python'
            })
        return evaluation.length > 0;
    }

    javascriptEvalution(){
        const evaluation = this.user
            .evaluations.filter((data) => {
                    return data.course === 'javascript'
            })
        return evaluation.length > 0;
    }
}