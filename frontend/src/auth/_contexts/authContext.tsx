import { createContext } from "react";;
import { AppReducerContext } from "@/shared/_types/appReducerContext";
import { AuthState } from "../_types/authState";
import { AuthAction } from "../_types/authAction";

export const initialState = {
  token: undefined,
  loaded: false,
  error: undefined,
} as AuthState;

export const AuthContext = createContext({
  state: initialState,
} as AppReducerContext<AuthState, AuthAction>);



