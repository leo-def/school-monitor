'use client'

import { PropsWithChildren, useReducer, useMemo } from "react";
import { WaitingContext } from "../_contexts/waitingContext";
import { waitingReducer } from "../_reducers/waitingReducer";
import { initialState } from "../_constants/initialState";

export const WaitingContextProvider = ({ children }: PropsWithChildren) => {
    const [state, dispatch] = useReducer(waitingReducer, initialState);
    const value = useMemo(() => ({ state, dispatch }), [state, dispatch])
    return (
        <WaitingContext.Provider value={value}>
            {children}
        </WaitingContext.Provider>
    );
};