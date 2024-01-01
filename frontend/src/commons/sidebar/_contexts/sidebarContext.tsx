"use client";

import { createContext } from "react";
import { AppReducerContext } from "@/commons/_types/appReducerContext";
import { SidebarState } from "../_types/sidebarState";
import { SidebarAction } from "../_types/sidebarAction";
import { initialState } from "../_constants/initialState";

export const SidebarContext = createContext({
  state: initialState,
} as AppReducerContext<SidebarState, SidebarAction>);



