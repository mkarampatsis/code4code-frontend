import { Component, inject, ViewEncapsulation } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef, GridApi, GridReadyEvent } from 'ag-grid-community';
import { GridLoadingOverlayComponent } from 'src/app/shared/modals/grid-loading-overlay/grid-loading-overlay.component';
import { ActionIconsLearnerComponent } from 'src/app/shared/components/action-icons-learner/action-icons-learner.component';
import { ExerciseService } from 'src/app/shared/services/exercise.services';
import { IUserTraining } from 'src/app/shared/interfaces/user-evaluation';
import { ConstService } from 'src/app/shared/services/const.service';
import { AuthService } from 'src/app/shared/services/auth.service';
import { take } from 'rxjs';

@Component({
  selector: 'app-learner-progress',
  standalone: true,
  imports: [AgGridAngular, GridLoadingOverlayComponent],
  templateUrl: './learner-progress.component.html',
  styleUrl: './learner-progress.component.css',
  encapsulation: ViewEncapsulation.None
})
export class LearnerProgressComponent {
    authService = inject(AuthService);
    constService = inject(ConstService);
    exerciseService = inject(ExerciseService);
    exercises: IUserTraining[] = [];

    defaultColDef = this.constService.defaultColDef;

    colDefs: ColDef[] = [
        // { field: 'email', headerName: 'Learner', flex: 1 },
        { field: 'exercise.type', headerName: 'Course', flex: 1 },
        { field: 'exercise.category.chapter', headerName: 'Chapter'},
        { field: 'exercise.difficulty', headerName: 'Difficulty Level'},
        { field: 'exercise.code', headerName: 'Code'},
        // { field: 'exercise.output', headerName: 'Correct Answer'},
        { 
            field: 'output', 
            headerName: "User's Answer",
            // cellStyle: params => {
            //     const output = params.data.exercise.output.replace("type=oneline ", "").trim()
            //     if (params.value === output) {
            //         //mark police cells as red
            //         return {color: 'red', backgroundColor: 'green'};
            //     } else {
            //         return {color: 'green', backgroundColor: 'red'};
            //     }
            //     return null;
            // }
        },
        { field: 'actionCell', headerName: 'Actions', cellRenderer: ActionIconsLearnerComponent,  filter: false, sortable: false, floatingFilter:false, flex: 1, resizable: false},
    ];
    autoSizeStrategy = this.constService.autoSizeStrategy;
    
    loadingOverlayComponent = GridLoadingOverlayComponent;
    loadingOverlayComponentParams = { loadingMessage: 'Exercise loading...' };

    gridApi: GridApi<IUserTraining>;

    onGridReady(params: GridReadyEvent<IUserTraining>): void {
        this.gridApi = params.api;
        this.gridApi.showLoadingOverlay();
        this.exerciseService
            .getUsersTrainingExercises(this.authService.user().email)
            .pipe(
                take(1),
            )
            .subscribe((data) => {
                this.gridApi.hideOverlay();
                this.exercises = data;
            });
    }
}
