import { Component, inject } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-learner-dashboard',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './learner-dashboard.component.html',
  styleUrl: './learner-dashboard.component.css'
})
export class LearnerDashboardComponent {
    authService = inject(AuthService);

    constructor(
        private router: Router
      ) { }

    checkPythonEvaluation() {
        console.log(this.authService.pythonEvalution())
        if (this.authService.pythonEvalution()){
            this.router.navigateByUrl('c4c/learner/python');
        } else {
            this.router.navigateByUrl('c4c/learner/python/evalution');
        }
    }

    checkJavascriptEvaluation() {
        console.log(this.authService.javascriptEvalution)
        if (this.authService.pythonEvalution()){
            this.router.navigateByUrl('c4c/learner/javascript');
        } else {
            this.router.navigateByUrl('c4c/learner/javascript/evalution');
        }
    }
}
