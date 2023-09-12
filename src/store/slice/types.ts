import { IQuestionsModule } from "../../features/questionModule/types";
import { IloggedInUser, ResponseType } from "../../helper/types";

export interface ReduxStateInterface {
  base: BaseSliceValue;
}

export interface IReduxStateForQuizPlay {
  quizPlay: QuizPlaySliceValue;
}

export interface BaseSliceValue {
  loading: boolean;
  loggedInUser: ResponseType<IloggedInUser> | null;
}

export interface SetBooleanPayload {
  payload: boolean;
  type: string;
}

export interface SetLoggedInUserPayload {
  payload: ResponseType<IloggedInUser> | null;
  type: string;
}

export interface QuizPlaySliceValue {
  selectedQuizModule: IQuestionsModule | null;
}

export interface SetSelectedQuizModulePayload {
  payload: IQuestionsModule | null;
  type: string;
}
