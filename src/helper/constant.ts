import { ECategory, EDifficulty } from "../features/questionModule/types";
import { ICategory, IDifficulty, INavItems } from "./types";

export const categories: ICategory[] = [
  {
    label: ECategory.JAVASCRIPT,
    category: ECategory.JAVASCRIPT,
  },
  {
    label: ECategory.REACT,
    category: ECategory.REACT,
  },
  {
    label: ECategory.TYPESCRIPT,
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

// export const API_ENDPOINT = "https://utmmsinmya.execute-api.us-east-1.amazonaws.com/prod";

// export const API_ENDPOINT = "https://utmmsinmya.execute-api.us-east-1.amazonaws.com/default";

// export const API_ENDPOINT = "https://4l5ereb29a.execute-api.us-east-1.amazonaws.com/default/quizApp-api-dev-app";

export const API_ENDPOINT = "http://localhost:8000";

export const defaultAvatar =
  "https://firebasestorage.googleapis.com/v0/b/quiz-app-e7a43.appspot.com/o/profiles%2FuserAvatar.png?alt=media&token=af63895f-9cfd-4805-911a-94474cef81b5";
