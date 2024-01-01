"use client";

import { PropsWithChildren, useReducer, useMemo } from "react";
import { ThemeContext } from "../_contexts/themeContext";
import { themeReducer } from "../_reducers/themeReducer";
import { initialState } from "../_constants/initialState";

export const ThemeContextProvider = ({ children }: PropsWithChildren) => {
    const [state, dispatch] = useReducer(themeReducer, initialState);
    const value = useMemo(() => ({ state, dispatch }), [state, dispatch])
    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
};