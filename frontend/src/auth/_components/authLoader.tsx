'use client'

import { PropsWithChildren, useContext, useEffect } from "react";
import { AuthStorageKeyEnum } from "../_enums/authStorageKey.enum";
import { AuthContext } from "../_contexts/authContext";
import { AuthActionTypeEnum } from "../_enums/authActionType.enum";
import { LoadAuthPayload } from "../_types/payloads/loadAuthPayload";

export const AuthLoader = ({ children }: PropsWithChildren) => {
    const { dispatch, state } = useContext(AuthContext);

    // Load context value
    useEffect(() => {
        const localToken = localStorage.getItem(AuthStorageKeyEnum.AUTH_TOKEN);
        if (!state || !dispatch) {
            return;
        }
        const { loaded } = state;
        if (!loaded) {
            dispatch({
                type: AuthActionTypeEnum.LOAD_AUTH,
                payload: { token: localToken } as LoadAuthPayload,
            });
        }
    }, [dispatch, state])

    // Load local storage value
    useEffect(() => {
        if (!state || !dispatch) {
            return;
        }
        const { loaded, token } = state;
        const localToken = localStorage.getItem(AuthStorageKeyEnum.AUTH_TOKEN);
        if (loaded && token && localToken !== token) {
            localStorage.setItem(AuthStorageKeyEnum.AUTH_TOKEN, JSON.stringify(token));
        }
    }, [dispatch, state])

    return (
        <>
            {children}
        </>
    );
};