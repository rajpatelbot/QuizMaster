export type TDifficulty = "easy" | "medium" | "hard";

export type TCategory = "JavaScript" | "React" | "TypeScript";

export interface IDifficulty {
  difficulty: TDifficulty;
}

export interface ICategory {
  category: TCategory;
}

export interface INavItems {
  name: string;
  path: string;
}

export interface ResponseType<T> {
  status: number;
  message: string;
  data?: T;
  token?: string;
  success: boolean;
}

export interface IloggedInUser {
  id: string;
  name: string;
  email: string;
  createdAt: string;
  profile: string;
}
