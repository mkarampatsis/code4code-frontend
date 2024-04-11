import { Component, inject } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { LearnerDashboardComponent } from 'src/app/learner/learner-dashboard/learner-dashboard.component';
import { InstructorDashboardComponent } from 'src/app/instructor/instructor-dashboard/instructor-dashboard.component';
import { AdministratorDashboardComponent } from 'src/app/administrator/administrator-dashboard/administrator-dashboard.component';
import { ConstService } from 'src/app/shared/services/const.service';

@Component({
    selector: 'app-dashboard',
    standalone: true,
    imports: [LearnerDashboardComponent, InstructorDashboardComponent, AdministratorDashboardComponent],
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.css',
})

export class DashboardComponent {
    authService = inject(AuthService);
    constService = inject(ConstService);

    // ce = this.authService.user;
    // categories = this.constService.PAY_CATEGORIES;
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
