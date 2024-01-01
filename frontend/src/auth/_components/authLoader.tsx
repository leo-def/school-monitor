"use client";

import { PropsWithChildren, useEffect, useContext } from "react";
import { AuthContext } from "../_contexts/authContext";
import { AuthStorageKeyEnum } from "../_enums/authStorageKey.enum";
import { useAuth } from "../_hooks/useAuth";

export const AuthLoader = ({ children }: PropsWithChildren) => {

    const {
        state: { token, loaded },
    } = useContext(AuthContext)
    const auth = useAuth()
    const localToken = localStorage.getItem(AuthStorageKeyEnum.AUTH_TOKEN);
    useEffect(() => {
        console.log("useLoadLocalStorageToken", { loaded, localToken, token, load: (!loaded && localToken && token !== localToken) });
        if (!loaded && localToken && token !== localToken) {
            auth(localToken);
        }
    }, [auth, loaded, localToken, token])

    return (
        <>
            {children}
        </>
    );
};


