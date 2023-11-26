'use client'

import { createContext } from "react";
import { AppReducerContext } from "@/shared/_types/appReducerContext";
import { SidebarState } from "../_types/sidebarState";
import { SidebarAction } from "../_types/sidebarAction";

export const initialState = {
  open: undefined
} as SidebarState;

export const SidebarContext = createContext({
  state: initialState,
} as AppReducerContext<SidebarState, SidebarAction>);



