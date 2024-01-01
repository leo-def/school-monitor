"use client";

import { PropsWithChildren, useEffect, useContext, useMemo, useState } from "react";
import { AuthContext } from "../_contexts/authContext";
import { AuthStorageKeyEnum } from "../_enums/authStorageKey.enum";
import { useAuth } from "../_hooks/useAuth";

export const AuthLoader = ({ children }: PropsWithChildren) => {
    const {
        state: { token, loaded },
    } = useContext(AuthContext)
    const auth = useAuth()
    const [ localToken, setLocalToken] = useState(null as string | null)
    useEffect(() => {
        if (!loaded && localToken && token !== localToken) {
            auth(localToken);
        }
    }, [auth, loaded, localToken, token])
    
    useEffect(() => {
        setLocalToken(localStorage.getItem(AuthStorageKeyEnum.AUTH_TOKEN))
    }, [setLocalToken])

    return (
        <>
            {children}
        </>
    );
};


