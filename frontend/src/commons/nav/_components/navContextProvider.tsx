'use client'

import { PropsWithChildren, useReducer, useMemo } from "react";
import { NavContext } from "../_contexts/navContext";
import { navReducer } from "../_reducers/navReducer";
import { initialState } from "../_constants/initialState";

export const NavContextProvider = ({ children }: PropsWithChildren) => {
    const [state, dispatch] = useReducer(navReducer, initialState);
    const value = useMemo(() => ({ state, dispatch }), [state, dispatch])
    return (
        <NavContext.Provider value={value}>
            {children}
        </NavContext.Provider>
    );
};