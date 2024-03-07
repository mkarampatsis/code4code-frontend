import { Routes } from '@angular/router';

import { registerGuard } from './guards/register.guard';

// import { StudentDashboardComponent } from './student/student-dashboard/student-dashboard.component';

import { LandingComponent } from './components/landing/landing.component';
import { LandingAuthoringToolComponent } from './components/landing-authoring-tool/landing-authoring-tool.component';
import { LandingLearningComponent } from './components/landing-learning/landing-learning.component';
import { LandingPlansComponent } from './components/landing-plans/landing-plans.component';
import { LandingRegisterComponent } from './components/landing-register/landing-register.component';

// prettier-ignore
export const routes: Routes = [
  { path: 'c4c', component: LandingComponent },
  { path: 'c4c/authoring', component: LandingAuthoringToolComponent },
  { path: 'c4c/learning', component: LandingLearningComponent },
  { path: 'c4c/plans', component: LandingPlansComponent },
  { path: 'c4c/register', component: LandingRegisterComponent, canActivate: [registerGuard], },
  //   {
  //     path: 'c4c/student/dashboard',
  //     component: StudentDashboardComponent,
  //     canActivate: [loggedInGuard],
  //   },
  { path: '', redirectTo: 'c4c', pathMatch: 'full' },
];
