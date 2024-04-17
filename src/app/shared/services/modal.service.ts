import { Injectable, inject } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { 
    ExerciseDetailsComponent, 
    ExerciseDetailsLearnerComponent,
    ExerciseEvaluationComponent, 
    ExerciseDescriptionComponent,
    ExerciseIntroTheoryComponent,
    BackendErrorComponent 
} from 'src/app/shared/modals'
import { IExercise } from 'src/app/shared/interfaces/exercises';
import { ExerciseService } from './exercise.services';

@Injectable({
    providedIn: 'root',
})
export class ModalService {
    modalService = inject(NgbModal);
    exerciseService = inject(ExerciseService)

    showExerciseDetails(exercise: IExercise) {
        const modalRef = this.modalService.open(ExerciseDetailsComponent, {
            size: 'xl',
            centered: true
        });
        modalRef.componentInstance.exercise = exercise;
        modalRef.componentInstance.modalRef = modalRef;
    }

    showExerciseDetailLearner(exerciseID: string) {
        const modalRef = this.modalService.open(ExerciseDetailsLearnerComponent, {
            size: 'xl',
            centered: true,
            windowClass: 'bg-custom-gray-900 mat-typography'
        });
        modalRef.componentInstance.exerciseID = exerciseID;
        modalRef.componentInstance.modalRef = modalRef;
    }

    showExerciseEvaluation(exercise: object) {
        const modalRef = this.modalService.open(ExerciseEvaluationComponent, {
            size: 'xl',
            centered: true
        });
        modalRef.componentInstance.exercise = exercise;
        modalRef.componentInstance.modalRef = modalRef;
        modalRef.componentInstance.event.subscribe((res: { data: any; }) => {
            this.exerciseService.setTrainingExerciseEvaluation(res.data)
                .subscribe((result) => {
                    this.exerciseService.trainingExercises.set(result)
                })
        });
    }

    createEvaluation(exercise: string) {
        const modalRef = this.modalService.open(ExerciseEvaluationComponent, {
            size: 'xl',
            centered: true,
        });
        modalRef.componentInstance.exercise = exercise;
        modalRef.componentInstance.modalRef = modalRef;
    }

    addExerciseDescription(description:string) {
        const modalRef = this.modalService.open(ExerciseDescriptionComponent, {
            size: 'xl',
            centered: true,
        });
        modalRef.componentInstance.description = description;
        modalRef.componentInstance.modalRef = modalRef;
        modalRef.result.then(
            result => { 
                result = {
                    exercise_description: [result]
                } 
                this.exerciseService.exercise$.set({...this.exerciseService.exercise$(), ...result})
            }
        )
    }

    addExerciseIntroTheory(data: object) {
        const modalRef = this.modalService.open(ExerciseIntroTheoryComponent, {
            size: 'xl',
            centered: true,
        });
        modalRef.componentInstance.data = data;
        modalRef.componentInstance.modalRef = modalRef;
        modalRef.result.then(
            result => { 
                result = {
                    introduction: [result.introduction],
                    subintroduction: [result.subintroduction]
                } 
                this.exerciseService.exercise$.set({...this.exerciseService.exercise$(), ...result})
            }
        )
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
