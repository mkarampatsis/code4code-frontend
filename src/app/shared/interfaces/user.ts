export type TUserCategory = 'student' | 'teacher' | 'institution';
export type TUserCourse = 'python' | 'javascript';
export type TUserLevel =
  | 'absolute_beginner'
  | 'beginner'
  | 'intermediate'
  | 'advanced';

export interface IUserAssessment {
  course: TUserCourse;
  level: TUserLevel;
}

export interface IUserEvaluationAnswer {
  questionId: string;
  answerText: string;
  correct: boolean;
}

export interface IUserEvaluation {
  course: TUserCourse;
  score: number;
  date: Date;
  answers: IUserEvaluationAnswer[];
}

export interface IUser {
  email: string;
  firstName: string;
  lastName: string;
  name: string;
  googleId: string;
  photoUrl: string;
  provider: string;
  isAdmin: boolean;
  isEnabled: boolean;
  category?: TUserCategory;
  assessments?: IUserAssessment[];
  evaluations?: IUserEvaluation[];
}
