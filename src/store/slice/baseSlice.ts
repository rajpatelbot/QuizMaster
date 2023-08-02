import { createSlice } from "@reduxjs/toolkit";
import { BaseSliceValue, SetBooleanPayload, TokenPayload } from "./types";

const initialState: BaseSliceValue = {
  token: null,
  loading: false,
};

export const BaseSlice = createSlice({
  name: "base",
  initialState,
  reducers: {
    setToken: (state, action: TokenPayload) => {
      state.token = action.payload;
    },
    setLoading: (state, action: SetBooleanPayload) => {
      state.loading = action.payload;
    },
  },
});

export const { setToken, setLoading } = BaseSlice.actions;
export default BaseSlice.reducer;
