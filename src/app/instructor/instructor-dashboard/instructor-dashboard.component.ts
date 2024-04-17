import { Component, inject } from '@angular/core';
import { RouterModule, Router, RouterLink } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-instructor-dashboard',
  standalone: true,
  imports: [RouterModule, RouterLink],
  templateUrl: './instructor-dashboard.component.html',
  styleUrl: './instructor-dashboard.component.css'
})
export class InstructorDashboardComponent {
    authService = inject(AuthService);
    router = inject(Router);
    
    goToAuthoringTool(course: string){
        this.router.navigate(['c4c/authoring-tool/', course]);
    }

    enrollToAuthoringTool(){
        this.router.navigate(['c4c/payform', 'instructor']);
    }
}
