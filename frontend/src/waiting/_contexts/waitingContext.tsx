import { createContext } from "react";
import { AppReducerContext } from "@/shared/_types/appReducerContext";
import { WaitingState } from "../_types/waitingState";
import { WaitingAction } from "../_types/waitingAction";

export const initialState = {
  tasks: []
} as WaitingState;

export const WaitingContext = createContext({
  state: initialState,
} as AppReducerContext<WaitingState, WaitingAction>);



