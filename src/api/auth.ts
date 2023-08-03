import { AxiosError } from "axios";
import { Dispatch } from "@reduxjs/toolkit";
import { setLoading, setLoggedInUser } from "../store/slice/baseSlice";
import { successToast } from "../components/Toast";
import { api } from "../config/api";
import { apiService } from "../config/apiService";
import { IloggedInUser, ResponseType } from "../helper/types";
import { ILoginFormState, ISignupFormState } from "../features/auth/types";
import { handleErrorResponse } from "../helper";

export const onSignup = async (payload: ISignupFormState, dispatch: Dispatch) => {
  try {
    dispatch(setLoading(true));

    const response = await apiService.post(api.signup, payload);
    const data: ResponseType<IloggedInUser> = response.data;

    successToast(data.message);
  } catch (error) {
    handleErrorResponse(error as AxiosError);
  } finally {
    dispatch(setLoading(false));
  }
};

export const onLogin = async (payload: ILoginFormState, dispatch: Dispatch) => {
  try {
    dispatch(setLoading(true));

    const response = await apiService.post(api.login, payload);
    const data: ResponseType<IloggedInUser> = response.data;

    dispatch(setLoggedInUser(data));
    successToast(data.message);
  } catch (error) {
    handleErrorResponse(error as AxiosError);
  } finally {
    dispatch(setLoading(false));
  }
};
