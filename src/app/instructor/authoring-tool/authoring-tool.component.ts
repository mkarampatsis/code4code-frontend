import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormGroup,
  FormControl,
  FormArray,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-authoring-tool',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './authoring-tool.component.html',
  styleUrl: './authoring-tool.component.css'
})
export class AuthoringToolComponent {
  
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
    type: new FormControl(''),
    code: new FormControl(''),
    output: new FormArray([])
  });


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
