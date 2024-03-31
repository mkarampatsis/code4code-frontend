// import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { LearnerDashboardComponent } from 'src/app/learner/learner-dashboard/learner-dashboard.component';
import { InstructorDashboardComponent } from 'src/app/instructor/instructor-dashboard/instructor-dashboard.component';
import { AdministratorDashboardComponent } from 'src/app/administrator/administrator-dashboard/administrator-dashboard.component';
// import { Component, OnInit } from '@angular/core';
// import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
// import { EditorComponent } from 'src/app/shared/components/editor/editor.component';
// import { ProseComponent } from 'src/app/shared/components/prose/prose.component';
// import { TerminalComponent } from 'src/app/shared/components/terminal/terminal.component';

@Component({
    selector: 'app-dashboard',
    standalone: true,
    imports: [LearnerDashboardComponent, InstructorDashboardComponent, AdministratorDashboardComponent],
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.css',
})

export class DashboardComponent {
    authService = inject(AuthService);
    user = this.authService.user;
}
// export class DashboardComponent implements OnInit {
    
    // form = new FormGroup({
    //     code: new FormControl('for x in range(1):\n  print(x)'),
    //     // code: new FormControl(''),
    // });

    // ngOnInit(): void {
    //     this.form.controls.code.valueChanges.subscribe((value) => {
    //         console.log(value);
    //     });
    // }

    // submit(): void {
    //     console.log(this.form.value);
    // }
// }
