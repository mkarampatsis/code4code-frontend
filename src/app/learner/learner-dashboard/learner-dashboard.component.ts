import { Component, inject } from '@angular/core';
import { RouterModule, Router, RouterLink } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { UserEvaluationService } from 'src/app/shared/services/evaluation.service';

@Component({
  selector: 'app-learner-dashboard',
  standalone: true,
  imports: [RouterModule, RouterLink],
  templateUrl: './learner-dashboard.component.html',
  styleUrl: './learner-dashboard.component.css'
})
export class LearnerDashboardComponent {
    authService = inject(AuthService);
    evaluationService = inject(UserEvaluationService)
    router = inject(Router);

    checkForEvaluation(course: string) {
        if (this.evaluationService.courseEvalution(course)){
            this.router.navigateByUrl('c4c/learner/' + course);
        } else {
            this.router.navigateByUrl('c4c/learner/'+ course + '/evalution');
        }
    }

    goToAuthoringTool(course: string){
        this.router.navigate(['c4c/authoring-tool/', course]);
    }

    enrollToCourse(){
        this.router.navigate(['c4c/payform', 'learner']);
    }

    enrollToAuthoringTool(){
        this.router.navigate(['c4c/payform', 'instructor']);
    }
}
