import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { PythonEditorComponent } from 'src/app/shared/components/editor/python-editor/python.editor.component';
import { ProseComponent } from 'src/app/shared/components/prose/prose.component';
import { PythonTerminalComponent } from 'src/app/shared/components/terminal/python-terminal/python.terminal.component';
import { HintComponent } from 'src/app/shared/components/hint/hint.component';
import { ExerciseService } from 'src/app/shared/services/exercise.services';
import { IExercise } from 'src/app/shared/interfaces/exercises';
import { ModalService } from 'src/app/shared/services/modal.service';
import { take } from 'rxjs';
import { AuthService } from 'src/app/shared/services/auth.service';

declare let loadPyodide: any;

@Component({
    selector: 'app-learner-python',
    standalone: true,
    imports: [
        CommonModule,
        ReactiveFormsModule,
        PythonEditorComponent,
        ProseComponent,
        PythonTerminalComponent,
        HintComponent,
    ],
    templateUrl: './learner-python.component.html',
    styleUrl: './learner-python.component.css'
})

export class LearnerPythonComponent {
    modalService = inject(ModalService);
    exerciseService = inject(ExerciseService)
    authService = inject(AuthService);
    
    exercise: IExercise;

    output: string = '';
    runOutput: string;
    
    form = new FormGroup({
        code: new FormControl(''),
    });

    
    constructor(){
        this.exerciseService
        .getLearnerExercise('python')
        .pipe(take(1))
        .subscribe((data) => {
            this.exercise = data[0]
            this.form.controls['code'].setValue(this.exercise.code)
        })
        this.addToOutput("Ready!<br>"); 
    }

    // ngOnInit(): void {
    //     this.form.controls.code.valueChanges.subscribe((value) => {
    //         console.log("XXX>>>",value);
    //     });
    // }

    submit(): void {
        const result = {
            email: this.authService.user().email,
            answer: this.form.controls.code.value,
            output: this.runOutput,
            exercise: this.exercise,
            user: this.authService.user()
        }
        this.exerciseService.postUsersTraining(result)
        .pipe(take(1))
        .subscribe(() => {
            this.nextExercise()
        })
    }

    showExerciseDetails(): void {
        this.modalService.showExerciseDetails(this.exercise);
    }

    async runCode(){
        let pyodide = await loadPyodide() 
        let code = this.form.controls.code.value.toString();
        
        try {
            pyodide.setStdout({ batched: (msg: string) => {
                this.addToOutput(msg); 
                this.runOutput = msg;
                console.log(msg)
            }
            });
            try {
                pyodide.runPython(code)
            } catch(err) {
                this.addToOutput(err); 
            }
        }  catch (err) {
        this.addToOutput(err);
      }
    }
  
    nextExercise(){
        this.exerciseService
        .getLearnerExercise('python')
        .pipe(take(1))
        .subscribe((data) => {
            this.exercise = data[0]
            this.form.controls['code'].setValue(this.exercise.code)
            this.output = ''
            this.addToOutput("Ready!<br>"); 
        })
    }

    addToOutput(msg: string) {
        this.output += ">>> " + msg + "<br>";
    }
}
