import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { EditorComponent } from 'src/app/shared/components/editor/editor.component';

@Component({
    selector: 'app-dashboard',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule, EditorComponent],
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.css',
})
export class DashboardComponent implements OnInit {
    form = new FormGroup({
        code: new FormControl(''),
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
