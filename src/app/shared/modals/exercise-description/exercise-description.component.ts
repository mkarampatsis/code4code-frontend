import { Component, inject, ViewEncapsulation } from '@angular/core';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule} from '@angular/common';

@Component({
  selector: 'app-exercise-description',
  standalone: true,
  imports: [CommonModule, NgbModalModule],
  templateUrl: './exercise-description.component.html',
  styleUrl: './exercise-description.component.css',
  encapsulation: ViewEncapsulation.None
})


export class ExerciseDescriptionComponent {
    modalRef: any;

    submit(data: any){
        this.modalRef.close(data);
    }
}
