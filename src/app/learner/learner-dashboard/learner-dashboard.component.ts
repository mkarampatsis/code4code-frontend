import { Component, inject } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { UserEvaluationService } from 'src/app/shared/services/evaluation.service';

@Component({
  selector: 'app-learner-dashboard',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './learner-dashboard.component.html',
  styleUrl: './learner-dashboard.component.css'
})
export class LearnerDashboardComponent {
    authService = inject(AuthService);
    evaluationService = inject(UserEvaluationService)

    constructor(
        private router: Router
      ) {}

    checkPythonEvaluation() {
        if (this.evaluationService.pythonEvalution()){
            this.router.navigateByUrl('c4c/learner/python');
        } else {
            this.router.navigateByUrl('c4c/learner/python/evalution');
        }
    }

    checkJavascriptEvaluation() {
        if (this.evaluationService.javascriptEvalution()){
            this.router.navigateByUrl('c4c/learner/javascript');
        } else {
            this.router.navigateByUrl('c4c/learner/javascript/evalution');
        }
    }
}
