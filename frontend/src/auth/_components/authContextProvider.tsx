'use client'

import { PropsWithChildren, useReducer, useMemo } from "react";
import { initialState, AuthContext } from "../_contexts/authContext";
import { authReducer } from "../_reducers/authReducer";

export const AuthContextProvider = ({ children }: PropsWithChildren) => {
    const [state, dispatch] = useReducer(authReducer, initialState);
    const value = useMemo(() => ({ state, dispatch }), [state, dispatch])
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};