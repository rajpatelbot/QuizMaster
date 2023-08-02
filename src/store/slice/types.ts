export interface BaseSliceValue {
  token: string | null;
  loading: boolean;
}

export interface TokenPayload {
  payload: string | null;
  type: string;
}

export interface SetBooleanPayload {
  payload: boolean;
  type: string;
}
