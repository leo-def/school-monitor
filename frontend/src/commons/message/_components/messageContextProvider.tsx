"use client";

import { PropsWithChildren, useReducer, useMemo } from "react";
import { MessageContext } from "../_contexts/messageContext";
import { waitingReducer } from "../_reducers/messageReducer";
import { initialState } from "../_constants/initialState";

export const MessageContextProvider = ({ children }: PropsWithChildren) => {
    const [state, dispatch] = useReducer(waitingReducer, initialState);
    const value = useMemo(() => ({ state, dispatch }), [state, dispatch])
    return (
        <MessageContext.Provider value={value}>
            {children}
        </MessageContext.Provider>
    );
};