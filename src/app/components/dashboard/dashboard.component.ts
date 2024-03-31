import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Editor, Toolbar, Validators, NgxEditorModule } from 'ngx-editor';
import { EditorComponent } from 'src/app/shared/components/editor/editor.component';
import { ProseComponent } from 'src/app/shared/components/prose/prose.component';
import { TerminalComponent } from 'src/app/shared/components/terminal/terminal.component';

@Component({
    selector: 'app-dashboard',
    standalone: true,
    imports: [
        CommonModule,
        ReactiveFormsModule,
        EditorComponent,
        ProseComponent,
        TerminalComponent,
        NgxEditorModule,
    ],
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.css',
})
export class DashboardComponent implements OnInit {
    form = new FormGroup({
        code: new FormControl(''),
        prose: new FormControl(''),
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
