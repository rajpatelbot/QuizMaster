import { ILanguage, ILevel, INavItems } from "./types";

export const languages: ILanguage[] = [
  {
    option: "JavaScript",
  },
  {
    option: "React.js",
  },
  {
    option: "TypeScript",
  },
];

export const level: ILevel[] = [
  {
    id: "level-1",
    level: "Easy",
  },
  {
    id: "level-2",
    level: "Medium",
  },
  {
    id: "level-3",
    level: "Hard",
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
