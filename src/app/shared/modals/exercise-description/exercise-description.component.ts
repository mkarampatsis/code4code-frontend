import { Component, inject, ViewChild, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule} from '@angular/common';
import { ProseComponent } from '../../components/prose/prose.component';

@Component({
  selector: 'app-exercise-description',
  standalone: true,
  imports: [CommonModule, NgbModalModule, ProseComponent],
  templateUrl: './exercise-description.component.html',
  styleUrl: './exercise-description.component.css',
  encapsulation: ViewEncapsulation.None
})

export class ExerciseDescriptionComponent implements AfterViewInit{
    @ViewChild(ProseComponent) proseComponent: ProseComponent  

    description: string;
    modalRef: any;

    ngAfterViewInit() {
        console.log(">>",this.description)
        this.proseComponent.setDescription(this.description)
    }

    submit(){
        console.log(this.proseComponent.doc.value)
        this.modalRef.close(this.proseComponent.doc.value);
    }
}
