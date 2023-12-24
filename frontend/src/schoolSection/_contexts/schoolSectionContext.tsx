import { createContext } from "react";;
import { AppReducerContext } from "@/shared/_types/appReducerContext";
import { SchoolSectionAction } from "../_types/schoolSectionAction";
import { SchoolSectionState } from "../_types/schoolSectionState";
import { initialState } from "../_constants/initialState";

export const SchoolSectionContext = createContext({
  state: initialState,
} as AppReducerContext<SchoolSectionState, SchoolSectionAction>);



