import { Injectable, inject } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { 
    ExerciseDetailsComponent, 
    ExerciseEvaluationComponent, 
    BackendErrorComponent 
} from 'src/app/shared/modals'

@Injectable({
    providedIn: 'root',
})
export class ModalService {
    modalService = inject(NgbModal);

    showExerciseDetails(exerciseID: string) {
        const modalRef = this.modalService.open(ExerciseDetailsComponent, {
            size: 'xl',
            centered: true,
        });
        modalRef.componentInstance.exerciseID = exerciseID;
        modalRef.componentInstance.modalRef = modalRef;
    }

    // showOrganizationUnitDetails(organizationUnitCode: string) {
    //     const modalRef = this.modalService.open(
    //         OrganizationUnitDetailsComponent,
    //         {
    //             size: 'xl',
    //             centered: true,
    //         },
    //     );
    //     modalRef.componentInstance.organizationUnitCode = organizationUnitCode;
    //     modalRef.componentInstance.modalRef = modalRef;
    // }

    // showOrganizationTree(organizationCode: string) {
    //     const modalRef = this.modalService.open(OrganizationTreeComponent, {
    //         size: 'xl',
    //         centered: true,
    //     });
    //     modalRef.componentInstance.organizationCode = organizationCode;
    //     modalRef.componentInstance.modalRef = modalRef;
    // }

    // uploadFile() {
    //     const modalRef = this.modalService.open(FileUploadComponent, {
    //         size: 'xl',
    //         centered: true,
    //     });
    //     modalRef.componentInstance.modalRef = modalRef;
    // }

    createEvaluation(exercise: string) {
        const modalRef = this.modalService.open(ExerciseEvaluationComponent, {
            size: 'xl',
            centered: true,
        });
        modalRef.componentInstance.exercise = exercise;
        modalRef.componentInstance.modalRef = modalRef;
    }

    showBackendError(message: string) {
        const modalRef = this.modalService.open(BackendErrorComponent, {
            size: 'md',
            centered: true,
        });
        modalRef.componentInstance.message = message;
        modalRef.componentInstance.modalRef = modalRef;
    }
}
