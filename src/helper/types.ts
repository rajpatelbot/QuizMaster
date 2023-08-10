export interface ILevel {
  id: string;
  level: string;
}

export interface ILanguage {
  option: string;
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
}
