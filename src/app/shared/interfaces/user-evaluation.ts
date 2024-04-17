import { IUser } from "./user";
import {IExercise} from "./exercises";

export interface IUserLanguageEvaluation {
  id: number
  question: string
  answers: [ 
    {
      text: string,
      correct: boolean
    }
  ]
  course: string
  level: string
  gravity: number
}

export interface IUserTraining {
    _id: string
    answer: string,
    output: string,
    exercise: IExercise,
    user: IUser,
    evaluation: number
}