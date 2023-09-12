import { createSlice } from "@reduxjs/toolkit";
import { QuizPlaySliceValue, SetSelectedQuizModulePayload } from "./types";

const initialQuizPlayState: QuizPlaySliceValue = {
  selectedQuizModule: null,
};

const quizPlaySlice = createSlice({
  name: "quizPlay",
  initialState: initialQuizPlayState,
  reducers: {
    setSelectedQuizModule: (state, action: SetSelectedQuizModulePayload) => {
      state.selectedQuizModule = action.payload;
    },
  },
});

export const { setSelectedQuizModule } = quizPlaySlice.actions;
export default quizPlaySlice.reducer;
