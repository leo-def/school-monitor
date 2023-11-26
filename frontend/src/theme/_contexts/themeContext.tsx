import { createContext } from "react";
import { AppReducerContext } from "@/shared/_types/appReducerContext";
import { ThemeState } from "../_types/themeState";
import { ThemeAction } from "../_types/themeAction";

export const initialState = {
  theme: undefined,
  loaded: false
} as ThemeState;

export const ThemeContext = createContext({
  state: initialState,
} as AppReducerContext<ThemeState, ThemeAction>);



