import { Component, inject, ViewEncapsulation} from '@angular/core';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { ExerciseService } from 'src/app/shared/services/exercise.services';
import { IExercise } from 'src/app/shared/interfaces/exercises' 
import {IUser} from 'src/app/shared/interfaces/user'
import { take } from 'rxjs';
import { CommonModule, NgIf } from '@angular/common';
import { CardRowRightLeftComponent } from 'src/app/shared/components/card-row-right-left/card-row-right-left.component';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-exercise-details',
  standalone: true,
  imports: [CommonModule, NgbModalModule, CardRowRightLeftComponent],
  templateUrl: './exercise-details.component.html',
  styleUrl: './exercise-details.component.css',
  encapsulation: ViewEncapsulation.None
})
export class ExerciseDetailsComponent {
    authService = inject(AuthService);
    exerciseService = inject(ExerciseService);
   
    exercise: IExercise | null = null;
    user: IUser | null = null;
    
    modalRef: any;
    
    ngOnInit() {
        if (this.exercise.output.length>0) {
            this.exercise.output = [this.exercise?.output[0].replace('type=oneline\n', '').trim()]
        } else {
            this.exercise.output = []
        }
        this.user = this.authService.user()
    }
}
