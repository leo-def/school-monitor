'use client'

import { createContext } from "react";;
import { AppReducerContext } from "@/shared/_types/appReducerContext";
import { NavState } from "../_types/navState";
import { NavAction } from "../_types/navAction";

export const initialState = {
  items: {},
  index: null,
  href: '',
} as NavState;

export const NavContext = createContext({
  state: initialState,
} as AppReducerContext<NavState, NavAction>);



