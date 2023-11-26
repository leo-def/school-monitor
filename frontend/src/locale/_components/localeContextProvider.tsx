'use client'

import { PropsWithChildren, useReducer, useMemo } from "react";
import { initialState, LocaleContext } from "../_contexts/localeContext";
import { localeReducer } from "../_reducers/localeReducer";

export const LocaleContextProvider = ({ children }: PropsWithChildren) => {
    const [state, dispatch] = useReducer(localeReducer, initialState);
    const value = useMemo(() => ({ state, dispatch }), [state, dispatch])
    return (
        <LocaleContext.Provider value={value}>
            {children}
        </LocaleContext.Provider>
    );
};