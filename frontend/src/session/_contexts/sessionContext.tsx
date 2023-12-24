import { createContext } from "react";;
import { SessionState } from "../_types/sessionState";
import { SessionAction } from "../_types/sessionAction";
import { initialState } from "../_constants/initialState";
import { AppReducerContext } from "@/commons/_types/appReducerContext";

export const SessionContext = createContext({
  state: initialState,
} as AppReducerContext<SessionState, SessionAction>);



