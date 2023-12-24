import { createContext } from "react";;
import { AppReducerContext } from "@/shared/_types/appReducerContext";
import { AuthState } from "../_types/authState";
import { AuthAction } from "../_types/authAction";
import { initialState } from "../_constants/initialState";

export const AuthContext = createContext({
  state: initialState,
} as AppReducerContext<AuthState, AuthAction>);


