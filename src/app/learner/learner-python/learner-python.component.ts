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
import { loadPyodide } from 'pyodide';

@Component({
    selector: 'app-learner-python',
    standalone: true,
    imports: [
        CommonModule,
        ReactiveFormsModule,
        PythonEditorComponent,
        ProseComponent,
        PythonTerminalComponent,
        HintComponent
    ],
    templateUrl: './learner-python.component.html',
    styleUrl: './learner-python.component.css'
})

export class LearnerPythonComponent {
    modalService = inject(ModalService);
    exerciseService = inject(ExerciseService)
    exercise: IExercise;

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
    }

    ngOnInit(): void {
        this.form.controls.code.valueChanges.subscribe((value) => {
            console.log("XXX>>>",value);
        });
    }

    submit(): void {
        console.log(this.form.value);
    }

    showExerciseDetails(): void {
        // console.log(this.params.data.exercise, this.params.data._id);
        this.modalService.showExerciseDetails(this.exercise.exercise);
    }

    runCode(){
        // loadPyodide({
        //     indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.25.1/full/pyodide.js',
        //   }).then((pyodide) => {
        //     pyodide.runPython('print("Hello from Python!")')
        //   })
             
        console.log(this.form.value.code);
    }

  
    nextExercise(){
        this.exerciseService
        .getLearnerExercise('python')
        .pipe(take(1))
        .subscribe((data) => {
            this.exercise = data[0]
            this.form.controls['code'].setValue(this.exercise.code)
        })
    }
}
