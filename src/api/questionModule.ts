import { AxiosError } from "axios";
import { Dispatch } from "@reduxjs/toolkit";
import { setLoading } from "../store/slice/baseSlice";
import { api } from "../config/api";
import { successToast } from "../components/Toast";
import { apiService } from "../config/apiService";
import { ResponseType } from "../helper/types";
import { handleErrorResponse } from "../helper";
import { IQuestionsModule } from "../features/questionModule/types";

export const postQuestions = async (payload: IQuestionsModule, dispatch: Dispatch) => {
  try {
    dispatch(setLoading(true));

    const response = await apiService.post(api.postQuestions, payload);
    const data: ResponseType<IQuestionsModule> = response.data;

    successToast(data.message);
  } catch (error) {
    handleErrorResponse(error as AxiosError);
  } finally {
    dispatch(setLoading(false));
  }
};
