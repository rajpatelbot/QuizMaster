import { ECategory, EDifficulty } from "../features/questionModule/types";
import { ICategory, IDifficulty, INavItems } from "./types";

export const categories: ICategory[] = [
  {
    category: ECategory.JAVASCRIPT,
  },
  {
    category: ECategory.REACT,
  },
  {
    category: ECategory.TYPESCRIPT,
  },
];

export const difficulties: IDifficulty[] = [
  {
    difficulty: EDifficulty.EASY,
  },
  {
    difficulty: EDifficulty.MEDIUM,
  },
  {
    difficulty: EDifficulty.HARD,
  },
];

export const navbarItems: INavItems[] = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "History",
    path: "/history",
  },
  {
    name: "Global Settings",
    path: "/global-settings",
  },
];

export const COOKIE_EXPIRES_IN = 24 * 60 * 60 * 1000;

export const API_ENDPOINT = import.meta.env.VITE_BACKEND_API || "http://localhost:8000/";
