import { AuthState } from "../_types/authState";

export const initialState = {
  token: undefined,
  userInfo: undefined,
  loaded: false,
  error: undefined,
} as AuthState;
