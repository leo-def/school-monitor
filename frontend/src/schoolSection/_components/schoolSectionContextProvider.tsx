'use client'

import { PropsWithChildren, useReducer, useMemo } from "react";
import { SchoolSectionContext } from "../_contexts/schoolSectionContext";
import { schoolSectionReducer } from "../_reducers/schoolSectionReducer";
import { initialState } from "../_constants/initialState";

export const SchoolSectionContextProvider = ({ children }: PropsWithChildren) => {
    const [state, dispatch] = useReducer(schoolSectionReducer, initialState);
    const value = useMemo(() => ({ state, dispatch }), [state, dispatch])
    return (
        <SchoolSectionContext.Provider value={value}>
            {children}
        </SchoolSectionContext.Provider>
    );
};