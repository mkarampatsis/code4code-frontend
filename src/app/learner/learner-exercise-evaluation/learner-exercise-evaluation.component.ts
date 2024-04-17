import { Component, inject, ViewEncapsulation, effect } from '@angular/core';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { ExerciseService } from 'src/app/shared/services/exercise.services';
import { IUserTraining } from 'src/app/shared/interfaces/user-evaluation';
import { AuthService } from 'src/app/shared/services/auth.service';
import { ModalService } from 'src/app/shared/services/modal.service';
import { take, Observable } from 'rxjs';

@Component({
  selector: 'app-learner-exercise-evaluation',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './learner-exercise-evaluation.component.html',
  styleUrl: './learner-exercise-evaluation.component.css',
  encapsulation: ViewEncapsulation.None
})
export class LearnerExerciseEvaluationComponent {
    authService = inject(AuthService);
    exerciseService = inject(ExerciseService);
    modalService = inject(ModalService);
    exercises: IUserTraining[] = [];

    constructor() {
       
        this.getUsersTrainingExercises()

        effect(() => {
            if (this.exerciseService.trainingExercises()){
                this.getUsersTrainingExercises()
            }
        });
    }
    
    evalModal(exercise: IUserTraining){
        this.modalService.showExerciseEvaluation(exercise);
    }
    
    getUsersTrainingExercises(){
        this.exerciseService
        .getUsersTrainingExercises(this.authService.user().email)
        .pipe(
            take(1),
        )
        .subscribe((data) => {
            this.exercises = data;
        });
    }
}
