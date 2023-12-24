'use client'

import { createContext } from "react";;
import { AppReducerContext } from "@/shared/_types/appReducerContext";
import { NavState } from "../_types/navState";
import { NavAction } from "../_types/navAction";
import { initialState } from "../_constants/initialState";


export const NavContext = createContext({
  state: initialState,
} as AppReducerContext<NavState, NavAction>);



