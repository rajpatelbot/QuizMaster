import { createSlice } from "@reduxjs/toolkit";
import { BaseSliceValue, SetBooleanPayload, SetLoggedInUserPayload } from "./types";

const initialState: BaseSliceValue = {
  loading: false,
  loggedInUser: null,
};

export const BaseSlice = createSlice({
  name: "base",
  initialState,
  reducers: {
    setLoading: (state, action: SetBooleanPayload) => {
      state.loading = action.payload;
    },
    setLoggedInUser: (state, action: SetLoggedInUserPayload) => {
      state.loggedInUser = action.payload;
    },
  },
});

export const { setLoading, setLoggedInUser } = BaseSlice.actions;
export default BaseSlice.reducer;
