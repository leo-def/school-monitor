import { createContext } from "react";
import { AppReducerContext } from "@/shared/_types/appReducerContext";
import { LocaleState } from "../_types/localeState";
import { LocaleAction } from "../_types/localeAction";

export const initialState = {
  locale: undefined,
  loaded: false,
  error: undefined,
} as LocaleState;

export const LocaleContext = createContext({
  state: initialState,
} as AppReducerContext<LocaleState, LocaleAction>);



