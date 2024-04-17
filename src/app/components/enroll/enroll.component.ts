import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterModule, Router, RouterLink } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { UserEvaluationService } from 'src/app/shared/services/evaluation.service';
import { ExerciseService } from 'src/app/shared/services/exercise.services';

@Component({
  selector: 'app-enroll',
  standalone: true,
  imports: [RouterModule, RouterLink],
  templateUrl: './enroll.component.html',
  styleUrl: './enroll.component.css'
})
export class EnrollComponent {
    authService = inject(AuthService);
    evaluationService = inject(UserEvaluationService)
    exerciseService = inject(ExerciseService);

    user = this.authService.user().email
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

    enrollToCourse(category: string, course: string){
        const result = this.exerciseService.getNumberOfTrainingExercises(this.user, category, course)
        result.subscribe((data) => {
            if (parseInt(data) <= 10) {
                this.router.navigateByUrl('c4c/learner/dashboard');
            } else {
                this.router.navigateByUrl('c4c/payform');
            }
        })
        
        // this.router.navigate(['c4c/payform', 'learner']);
    }

    enrollToAuthoringTool(){
        this.router.navigate(['c4c/payform', 'instructor']);
    }
}
