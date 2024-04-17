import { Component, inject, ViewEncapsulation, EventEmitter } from '@angular/core';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { IUserTraining } from 'src/app/shared/interfaces/user-evaluation';
import { CommonModule} from '@angular/common';
import { CardRowRightLeftComponent } from 'src/app/shared/components/card-row-right-left/card-row-right-left.component';

@Component({
  selector: 'app-exercise-evaluation',
  standalone: true,
  imports: [CommonModule, NgbModalModule, CardRowRightLeftComponent],
  templateUrl: './exercise-evaluation.component.html',
  styleUrl: './exercise-evaluation.component.css',
  encapsulation: ViewEncapsulation.None
})
export class ExerciseEvaluationComponent {
   
    exercise: IUserTraining | null = null;
    
    modalRef: any;
    public event: EventEmitter<any> = new EventEmitter();
    
    submitEval(exercise:string, value:string){
        const data = {
            id: exercise,
            evaluation: value
        }
        this.triggerEvent(data);
        this.modalRef.close();
    }

    triggerEvent(item: object) {
        this.event.emit({ data: item , res:200 });
    }
}
