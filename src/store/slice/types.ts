import { IloggedInUser, ResponseType } from "../../helper/types";

export interface ReduxStateInterface {
  base: BaseSliceValue;
}

export interface BaseSliceValue {
  token: string | null;
  loading: boolean;
  loggedInUser: ResponseType<IloggedInUser> | null;
}

export interface TokenPayload {
  payload: string | null;
  type: string;
}

export interface SetBooleanPayload {
  payload: boolean;
  type: string;
}

export interface SetLoggedInUserPayload {
  payload: ResponseType<IloggedInUser> | null;
  type: string;
}
