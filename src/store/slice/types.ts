import { IloggedInUser, ResponseType } from "../../helper/types";

export interface ReduxStateInterface {
  base: BaseSliceValue;
}

export interface BaseSliceValue {
  loading: boolean;
  loggedInUser: ResponseType<IloggedInUser> | null;
}

export interface SetBooleanPayload {
  payload: boolean;
  type: string;
}

export interface SetLoggedInUserPayload {
  payload: ResponseType<IloggedInUser> | null;
  type: string;
}
