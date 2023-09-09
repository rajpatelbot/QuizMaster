import { AxiosError } from "axios";
import { Dispatch } from "@reduxjs/toolkit";
import { setLoading } from "../store/slice/baseSlice";
import { api } from "../config/api";
import { successToast } from "../components/Toast";
import { apiService } from "../config/apiService";
import { ResponseType } from "../helper/types";
import { handleErrorResponse } from "../helper";
import { IQuestionsModule } from "../features/questionModule/types";
import { API_ENDPOINT } from "../helper/constant";
import { UseFetchResponse } from "../hooks/interface";

export const postQuestions = async (payload: IQuestionsModule, dispatch: Dispatch) => {
  try {
    dispatch(setLoading(true));

    const response = await apiService.post(api.postQuestions, payload, { headers: { "Content-Type": "multipart/form-data" } });
    const data: ResponseType<IQuestionsModule> = response.data;

    successToast(data.message);
  } catch (error) {
    handleErrorResponse(error as AxiosError);
  } finally {
    dispatch(setLoading(false));
  }
};

export const delteQuestions = async (id: string, dispatch: Dispatch, fetchData: UseFetchResponse<IQuestionsModule>["fetchData"]) => {
  try {
    dispatch(setLoading(true));

    const response = await apiService.delete(api.deleteQuestionsModulesById + id);
    const { data } = response;

    fetchData(API_ENDPOINT + api.getQuestionsModules);
    successToast(data.message);
  } catch (error) {
    handleErrorResponse(error as AxiosError);
  } finally {
    dispatch(setLoading(false));
  }
};
