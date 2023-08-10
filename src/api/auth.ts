import { AxiosError } from "axios";
import { NavigateFunction } from "react-router-dom";
import { Dispatch } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import { setLoading, setLoggedInUser } from "../store/slice/baseSlice";
import { successToast } from "../components/Toast";
import { api } from "../config/api";
import { apiService } from "../config/apiService";
import { ILoginFormState, ISignupFormState } from "../features/auth/types";
import { IloggedInUser, ResponseType } from "../helper/types";
import { handleErrorResponse } from "../helper";
import { COOKIE_EXPIRES_IN } from "../helper/constant";

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

export const onLogin = async (payload: ILoginFormState, dispatch: Dispatch, navigate: NavigateFunction) => {
  try {
    dispatch(setLoading(true));

    const response = await apiService.post(api.login, payload);
    const data: ResponseType<IloggedInUser> = response.data;

    const responseToken = data.token ?? "";
    Cookies.set("token", responseToken, { expires: COOKIE_EXPIRES_IN });

    dispatch(setLoggedInUser(data));
    successToast(data.message);

    navigate("/");
  } catch (error) {
    handleErrorResponse(error as AxiosError);
  } finally {
    dispatch(setLoading(false));
  }
};
