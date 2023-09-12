import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

import BaseSlice from "./slice/baseSlice";
import quizPlaySlice from "./slice/quiz.playSlice";

const persistConfig = {
  key: "quiz-app",
  storage,
  whitelist: ["base"],
  blacklist: ["quizPlay"],
};

const rootReducer = combineReducers({
  base: BaseSlice,
  quizPlay: quizPlaySlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST"],
        ignoredPaths: ["quizPlay"],
      },
    }),
});

export const persistor = persistStore(store);
