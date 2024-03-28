import { Component, inject } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef, GridApi, GridReadyEvent } from 'ag-grid-community';
import { GridLoadingOverlayComponent } from 'src/app/shared/modals/grid-loading-overlay/grid-loading-overlay.component';
import { ActionIconsComponent } from 'src/app/shared/components/action-icons/action-icons.component';
import { ExerciseService } from 'src/app/shared/services/exercise.services';
import { IExercise } from 'src/app/shared/interfaces/exercises';
import { RouterModule } from '@angular/router';
import { map, take } from 'rxjs';
import { ConstService } from 'src/app/shared/services/const.service';

interface IRow {
    make: string;
    model: string;
    price: number;
    electric: boolean;
  }
  
@Component({
  selector: 'app-exercise-preview',
  standalone: true,
  imports: [RouterModule,AgGridAngular, GridLoadingOverlayComponent],
  templateUrl: './exercise-preview.component.html',
  styleUrl: './exercise-preview.component.css'
})
export class ExercisePreviewComponent {
    constService = inject(ConstService);
    exerciseService = inject(ExerciseService);
    exercises: IExercise[] = [];

    defaultColDef = this.constService.defaultColDef;

    colDefs: ColDef[] = [
        { field: 'author.name', headerName: 'Author', flex: 1 },
        { field: 'type', headerName: 'Languange', flex: 1 },
        { field: 'chapter', headerName: 'Chapter'},
        { field: 'difficulty', headerName: 'Difficulty', flex: 1 },
        { field: 'actionCell', headerName: 'Ενέργειες', cellRenderer: ActionIconsComponent,  filter: false, sortable: false, floatingFilter:false, flex: 1, resizable: false},
    ];
    autoSizeStrategy = this.constService.autoSizeStrategy;
    
    loadingOverlayComponent = GridLoadingOverlayComponent;
    loadingOverlayComponentParams = { loadingMessage: 'Αναζήτηση φορέων...' };

    gridApi: GridApi<IExercise>;

    // constructor(){
    //     this.exerciseService.getExercises()
    //         .subscribe( (result) => {
    //             console.log(result);
    //             this.exercises = result;
    //         });
    // }

    // previewExercise(code:string){
    //     console.log(code)
    // }

    onGridReady(params: GridReadyEvent<IExercise>): void {
        this.gridApi = params.api;
        this.gridApi.showLoadingOverlay();
        this.exerciseService
            .getExercises()
            .pipe(
                take(1),
                // map((data) => {
                //     return data.map((org) => {
                //         return {
                //             ...org,
                //             organizationType: this.organizationTypesMap.get(
                //                 parseInt(String(org.organizationType)),
                //             ),
                //             subOrganizationOf: this.organizationCodesMap.get(
                //                 org.subOrganizationOf,
                //             ),
                //         };
                //     });
                // }),
            )
            .subscribe((data) => {
                this.gridApi.hideOverlay();
                this.exercises = data;
            });
    }
}
