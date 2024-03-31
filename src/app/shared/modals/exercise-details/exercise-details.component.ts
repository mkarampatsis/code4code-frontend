import { Component, inject } from '@angular/core';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { ExerciseService } from 'src/app/shared/services/exercise.services';
import { IExercise } from 'src/app/shared/interfaces/exercises' 
import { take } from 'rxjs';
import { CommonModule } from '@angular/common';
import { CardRowRightLeftComponent } from 'src/app/shared/components/card-row-right-left/card-row-right-left.component';


@Component({
  selector: 'app-exercise-details',
  standalone: true,
  imports: [CommonModule, NgbModalModule, CardRowRightLeftComponent],
  templateUrl: './exercise-details.component.html',
  styleUrl: './exercise-details.component.css'
})
export class ExerciseDetailsComponent {
    exerciseService = inject(ExerciseService);
   
    exerciseID: string | null = null;
    exercise: IExercise | null = null;
    modalRef: any;
    
    ngOnInit() {
        this.exerciseService
            .getExercise(this.exerciseID)
            .pipe(take(1))
            .subscribe((data) => {
                this.exercise = data;
            });
    }
}
