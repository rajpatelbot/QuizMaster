import { IloggedInUser, TCategory, TDifficulty } from "../../helper/types";

export enum EDifficulty {
  EASY = "easy",
  MEDIUM = "medium",
  HARD = "hard",
}

export enum ECategory {
  JAVASCRIPT = "JavaScript",
  REACT = "React",
  TYPESCRIPT = "TypeScript",
}

export interface IQuestionsModule {
  _id?: string;
  questions: IQuestions[] | null;
  category: TCategory | null;
  difficulty: TDifficulty | null;
  duration: number;
  totalPoint?: number;
  createdBy: IloggedInUser;
  createdAt: string;
  updatedAt: string;
}

export interface IQuestions {
  question: string;
  options: string[];
  correctAnswer: string;
  point: number;
  quesImg?: string;
}
