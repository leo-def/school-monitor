"use client";

import { PropsWithChildren, useReducer, useMemo } from "react";
import { SessionContext } from "../_contexts/sessionContext";
import { sessionReducer } from "../_reducers/sessionReducer";
import { initialState } from "../_constants/initialState";

export const SessionContextProvider = ({ children }: PropsWithChildren) => {
    const [state, dispatch] = useReducer(sessionReducer, initialState);
    const value = useMemo(() => ({ state, dispatch }), [state, dispatch])
    return (
        <SessionContext.Provider value={value}>
            {children}
        </SessionContext.Provider>
    );
};