import { Component, inject, ViewEncapsulation } from '@angular/core';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { ExerciseService } from 'src/app/shared/services/exercise.services';
import { IExercise } from 'src/app/shared/interfaces/exercises' 
import {IUser} from 'src/app/shared/interfaces/user'
import { take } from 'rxjs';
import { CommonModule} from '@angular/common';
import { CardRowRightLeftComponent } from 'src/app/shared/components/card-row-right-left/card-row-right-left.component';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-exercise-details-learner',
  standalone: true,
  imports: [CommonModule, NgbModalModule, CardRowRightLeftComponent],
  templateUrl: './exercise-details-learner.component.html',
  styleUrl: './exercise-details-learner.component.css',
  encapsulation: ViewEncapsulation.None
})
export class ExerciseDetailsLearnerComponent {
    authService = inject(AuthService);
    exerciseService = inject(ExerciseService);
   
    exerciseID: string | null = null;
    exercise: IExercise | null = null;
    user: IUser | null = null;
    
    modalRef: any;
    
    ngOnInit() {
        this.exerciseService
            .getExercise(this.exerciseID)
            .pipe(take(1))
            .subscribe((data) => {
                this.exercise = data;
            });
        
        this.user = this.authService.user()
    }
}
