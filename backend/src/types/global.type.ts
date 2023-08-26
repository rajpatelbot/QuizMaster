import { Document } from "mongoose";

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  profile: string;
}

export type TDifficulty = "easy" | "medium" | "hard";
export type TCategory = "JavaScript" | "React" | "TypeScript";

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
  questions: IQuestions[];
  category: TCategory;
  difficulty: TDifficulty;
  duration: number;
  totalPoint: number;
  createdBy: IUser["_id"];
}

export interface IQuestions {
  question: string;
  options: string[];
  correctAnswer: string;
  point: number;
  quesImg?: string;
}
