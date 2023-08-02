import { Dispatch } from "@reduxjs/toolkit";
import { ISignupFormState } from "../components/auth/types";
import { api } from "../config/api";
import { apiService } from "../config/apiService";
import { setLoading, setToken } from "../store/slice/baseSlice";

export const onSignup = async (payload: ISignupFormState, dispatch: Dispatch) => {
  try {
    dispatch(setLoading(true));

    const response = await apiService.post(api.signup, payload);
    const data = response.data;

    console.log(data);

    dispatch(setToken(data.token));
  } catch (error) {
    console.log(error);
  } finally {
    dispatch(setLoading(false));
  }
};
