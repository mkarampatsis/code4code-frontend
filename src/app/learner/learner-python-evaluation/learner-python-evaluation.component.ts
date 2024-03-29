import { Component, inject } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { capitalize } from 'lodash-es';
import { CommonModule, NgFor } from '@angular/common';
import { ConstService } from 'src/app/shared/services/const.service';
import { AuthService } from 'src/app/shared/services/auth.service';
import { ExerciseService } from 'src/app/shared/services/exercise.services';
import { IUserLanguageEvaluation } from 'src/app/shared/interfaces/user-evaluation'; 

@Component({
  selector: 'app-learner-python-evaluation',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, NgFor],
  templateUrl: './learner-python-evaluation.component.html',
  styleUrl: './learner-python-evaluation.component.css'
})
export class LearnerPythonEvaluationComponent {
    authService = inject(AuthService);
    user$ = this.authService.user();
    name$ = this.user$.name.split(" ")[0];
   

    exerciseServise = inject(ExerciseService);
   
    constService = inject(ConstService);
    levels  = this.constService.USER_LEVEL;
  
    exercises: Array<IUserLanguageEvaluation> | undefined;

    frmLanguage = new FormGroup({
        'level': new FormControl('')
    });
  
    frmEvaluation = new FormGroup({
        'exercise1': new FormArray([]),
        'exercise2': new FormArray([]),
        'exercise3': new FormArray([]),
        'exercise4': new FormArray([]),
        'exercise5': new FormArray([]),
        'exercise6': new FormArray([]),
        'exercise7': new FormArray([]),
        'exercise8': new FormArray([]),
        'exercise9': new FormArray([]),
        'exercise10': new FormArray([]),
    });

    constructor(){
       this.exerciseServise.getEvaluationExercises('python')
        .subscribe({
            next: (data) => {
              this.exercises = data       
            },
            error: error => {
              console.log(error);
            }
          }) 
    }
      
    onCheckboxChange(e: any, exercise: number) {
      let checkArray: FormArray = this.frmEvaluation.get("exercise"+exercise.toString()) as FormArray;
      
      if (e.target.checked) {
        checkArray.push(new FormControl(e.target.value));
      } else {
        let i: number = 0;
        checkArray.controls.forEach((item: any) => {
          if (item.value == e.target.value) {
            checkArray.removeAt(i);
            return;
          }
          i++;
        });
      }
      console.log(this.frmEvaluation.value)
    }
  
    saveAnswers(){
      const boolValue = (currentValue: string) => currentValue === "true";
      let result = {
        'exercise1': this.frmEvaluation.value.exercise1.length>0 ? this.frmEvaluation.value.exercise1.every(boolValue): false,
        'exercise2': this.frmEvaluation.value.exercise2.length>0 ? this.frmEvaluation.value.exercise2.every(boolValue): false,
        'exercise3': this.frmEvaluation.value.exercise3.length>0 ? this.frmEvaluation.value.exercise3.every(boolValue): false,
        'exercise4': this.frmEvaluation.value.exercise4.length>0 ? this.frmEvaluation.value.exercise4.every(boolValue): false,
        'exercise5': this.frmEvaluation.value.exercise5.length>0 ? this.frmEvaluation.value.exercise5.every(boolValue): false,
        'exercise6': this.frmEvaluation.value.exercise6.length>0 ? this.frmEvaluation.value.exercise6.every(boolValue): false,
        'exercise7': this.frmEvaluation.value.exercise7.length>0 ? this.frmEvaluation.value.exercise7.every(boolValue): false,
        'exercise8': this.frmEvaluation.value.exercise8.length>0 ? this.frmEvaluation.value.exercise8.every(boolValue): false,
        'exercise9': this.frmEvaluation.value.exercise9.length>0 ? this.frmEvaluation.value.exercise9.every(boolValue): false,
        'exercise10': this.frmEvaluation.value.exercise10.length>0 ? this.frmEvaluation.value.exercise10.every(boolValue): false,
      }
      console.log(result);
    //   this.router.navigate(['learner/learning-path', this.language]);
    }
  
    resetForm(){
      console.log("reset");
      this.frmEvaluation.reset();
      this.exercises = [];
    }

    capitalize(value: string) {
        return capitalize(value);
    }
}
