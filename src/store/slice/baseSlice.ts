import { createSlice } from "@reduxjs/toolkit";
import { BaseSliceValue, SetBooleanPayload, SetLoggedInUserPayload, TokenPayload } from "./types";

const initialState: BaseSliceValue = {
  token: null,
  loading: false,
  loggedInUser: null,
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
    setLoggedInUser: (state, action: SetLoggedInUserPayload) => {
      state.loggedInUser = action.payload;
    },
  },
});

export const { setToken, setLoading, setLoggedInUser } = BaseSlice.actions;
export default BaseSlice.reducer;
