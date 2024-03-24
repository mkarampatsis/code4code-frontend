import { Routes } from '@angular/router';

import { registerGuard } from './guards/register.guard';
import { loggedInGuard } from './guards/loggedIn.guard';

import { LandingComponent } from './components/landing/landing.component';
import { LandingAuthoringToolComponent } from './components/landing-authoring-tool/landing-authoring-tool.component';
import { LandingLearningComponent } from './components/landing-learning/landing-learning.component';
import { LandingPlansComponent } from './components/landing-plans/landing-plans.component';
import { LandingRegisterComponent } from './components/landing-register/landing-register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthoringToolComponent } from './instructor/authoring-tool/authoring-tool.component';
import { InstructorDashboardComponent } from './instructor/instructor-dashboard/instructor-dashboard.component';
import { ExercisePreviewComponent } from './instructor/exercise-preview/exercise-preview.component';

// prettier-ignore
export const routes: Routes = [
  { path: 'c4c', component: LandingComponent },
  { path: 'c4c/authoring', component: LandingAuthoringToolComponent },
  { path: 'c4c/learning', component: LandingLearningComponent },
  { path: 'c4c/plans', component: LandingPlansComponent },
  { path: 'c4c/register', component: LandingRegisterComponent, canActivate: [registerGuard], },
  { path: 'c4c/dashboard', component: DashboardComponent, canActivate: [loggedInGuard], },
  { path: '', redirectTo: 'c4c', pathMatch: 'full' },

  // Instructors Routes
  { path: 'c4c/authoring-tool', component: AuthoringToolComponent },
  { path: 'c4c/instructor/dashboard', component: InstructorDashboardComponent },
  { path: 'c4c/exercise/preview', component: ExercisePreviewComponent },

];
