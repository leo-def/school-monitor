import { createContext } from "react";
import { AppReducerContext } from "@/shared/_types/appReducerContext";
import { ThemeState } from "../_types/themeState";
import { ThemeAction } from "../_types/themeAction";
import { initialState } from "../_constants/initialState";


export const ThemeContext = createContext({
  state: initialState,
} as AppReducerContext<ThemeState, ThemeAction>);



