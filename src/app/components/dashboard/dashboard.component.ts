import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { EditorComponent } from 'src/app/shared/components/editor/editor.component';

@Component({
    selector: 'app-dashboard',
    standalone: true,
    imports: [CommonModule, EditorComponent],
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.css',
})
export class DashboardComponent {}
