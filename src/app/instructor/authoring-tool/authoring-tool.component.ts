import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormGroup,
  FormControl,
  FormArray,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-authoring-tool',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './authoring-tool.component.html',
  styleUrl: './authoring-tool.component.css'
})
export class AuthoringToolComponent implements OnInit {
    route = inject(ActivatedRoute);

    course: string | undefined; 

    form = new FormGroup({
        introduction: new FormControl('', Validators.required),
        subintroduction: new FormControl(''),
        exercise_description: new FormControl('', Validators.required),
        category: new FormGroup({
            chapter: new FormControl(''),
            subchapter: new FormArray([])
        }),
        hints: new FormArray([]),
        author: new FormGroup({
            name: new FormControl(''),
            email: new FormControl('')
        }),
        course: new FormControl(''),
        code: new FormControl(''),
        output: new FormArray([])
    });


    constructor(){
        this.course = this.route.snapshot.params['course'];
    }

    ngOnInit(): void {
        this.form.controls['course'].setValue(this.course);
    }

    addHint() {
        const hintForm =  new FormGroup({
            text: new FormControl(''),
            code: new FormControl(''),
            penalty: new FormControl('')          
         })

        this.form.controls['hints'].push(hintForm)
    }

    deleteHint(hintIndex: number) {
        this.form.controls['hints'].removeAt(hintIndex);
    }

    onSubmit() {
        console.log(this.form.value)
    }
}
