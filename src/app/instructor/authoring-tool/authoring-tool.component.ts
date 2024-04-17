import { CommonModule } from '@angular/common';
import { Component, effect, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup,FormArray,Validators, ReactiveFormsModule } from '@angular/forms';
import { EditorComponent } from 'src/app/shared/components/editor/editor.component';
import { TerminalComponent } from 'src/app/shared/components/terminal/terminal.component';

import { HintComponent } from 'src/app/shared/components/hint/hint.component';
import { ExerciseService } from 'src/app/shared/services/exercise.services';
import { IExercise } from 'src/app/shared/interfaces/exercises';
import { ModalService } from 'src/app/shared/services/modal.service';
import { take } from 'rxjs';
import { AuthService } from 'src/app/shared/services/auth.service';
import { ActivatedRoute } from '@angular/router';
import 'short-uuid'
import shortUUID from 'short-uuid';

declare let loadPyodide: any;

@Component({
  selector: 'app-authoring-tool',
  standalone: true,
  imports: [
        CommonModule,
        ReactiveFormsModule,
        EditorComponent,
        TerminalComponent,
        HintComponent,
  ],
  templateUrl: './authoring-tool.component.html',
  styleUrl: './authoring-tool.component.css'
})
export class AuthoringToolComponent implements OnInit {
    modalService = inject(ModalService);
    exerciseService = inject(ExerciseService)
    authService = inject(AuthService);
    route = inject(ActivatedRoute);

    exercise: IExercise;

    output: string = '';
    runOutput: string;;

    course: string | undefined;
    introTheory 

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
        const uuid = shortUUID()

        this.course = this.route.snapshot.params['course'];
        this.exerciseService.exercise$.set({
            introduction: [],
            subintroduction: [],
            exercise_description: [],
            category: {
                chapter: "",
                subchapter: []
            },
            hints: [],
            author: {
                name: this.authService.user().name,
                email: this.authService.user().email
            },
            type: this.course,
            code: "",
            output: [],
            exercise: uuid.generate(),
            difficulty: ""
        })
        this.exercise = this.exerciseService.exercise$()
        this.addToOutput("Ready!<br>"); 
        
        effect(() => {
            if (this.exerciseService.exercise$()){
                this.exercise = this.exerciseService.exercise$()
            }

            this.introTheory = true? this.exerciseService.exercise$().introduction.length>0 || this.exerciseService.exercise$().subintroduction.length>0 : false
            console.log(this.introTheory) 
        });
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

    submit(): void {
        console.log(this.exerciseService.exercise$)
        // const result = {
        //     email: this.authService.user().email,
        //     answer: this.form.controls.code.value,
        //     output: this.runOutput,
        //     exercise: this.exercise,
        //     user: this.authService.user()
        // }
        // this.exerciseService.postUsersTraining(result)
        // .pipe(take(1))
        // .subscribe(() => {
        //     this.nextExercise()
        // })
    }

    showExerciseDetails() {
        this.modalService.showExerciseDetails(this.exercise);
    }

    addDescription() {
        this.modalService.addExerciseDescription(this.exerciseService.exercise$().exercise_description[0]);
    }

    addIntroTheory() {
        const data = {
            introduction: this.exerciseService.exercise$().introduction[0],
            subintroduction: this.exerciseService.exercise$().subintroduction[0]
        }
        this.modalService.addExerciseIntroTheory(data);
    }

    async runCode(){
        let code = this.form.controls.code.value.toString();
        
        if (this.course==="javascript") {
            if (typeof Worker !== 'undefined') {
                const worker = new Worker(new URL('../../shared/workers/javascript.worker', import.meta.url));
                worker.onmessage = ({ data }) => {
                    console.log(`page got message: ${data.result}`);
                    if (data.status) {
                        this.runOutput = data.result;
                    }
                    
                    this.addToOutput(data.result);
                };
                worker.postMessage(code);
            } else {
                console.log("Web workers are not supported in this environment.")
            }
        } else {
            let pyodide = await loadPyodide() 
           
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
