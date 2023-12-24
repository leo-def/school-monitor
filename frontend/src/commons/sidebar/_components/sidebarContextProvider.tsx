'use client'

import { PropsWithChildren, useReducer, useMemo } from "react";
import { SidebarContext } from "../_contexts/sidebarContext";
import { sidebarReducer } from "../_reducers/sidebarReducer";
import { initialState } from "../_constants/initialState";

export const SidebarContextProvider = ({ children }: PropsWithChildren) => {
    const [state, dispatch] = useReducer(sidebarReducer, initialState);
    const value = useMemo(() => ({ state, dispatch }), [state, dispatch])
    return (
        <SidebarContext.Provider value={value}>
            {children}
        </SidebarContext.Provider>
    );
};