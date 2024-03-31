import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { PythonEditorComponent } from 'src/app/shared/components/editor/python-editor/python.editor.component';
import { ProseComponent } from 'src/app/shared/components/prose/prose.component';
import { PythonTerminalComponent } from 'src/app/shared/components/terminal/python-terminal/python.terminal.component';

@Component({
    selector: 'app-learner-python',
    standalone: true,
    imports: [
        CommonModule,
        ReactiveFormsModule,
        PythonEditorComponent,
        ProseComponent,
        PythonTerminalComponent,
    ],
    templateUrl: './learner-python.component.html',
    styleUrl: './learner-python.component.css'
})

export class LearnerPythonComponent {
    form = new FormGroup({
        code: new FormControl('for x in range(1):\n  print(x)'),
        // code: new FormControl(''),
    });

    ngOnInit(): void {
        this.form.controls.code.valueChanges.subscribe((value) => {
            console.log(value);
        });
    }

    submit(): void {
        console.log(this.form.value);
    }
}
