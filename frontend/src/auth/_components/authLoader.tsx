'use client'

import { PropsWithChildren, useContext, useEffect } from "react";
import { AuthContext } from "../_contexts/authContext";
import { useLoadLocalStorageToken } from "../_hooks/useLoadLocalStorageToken";
import { useSetLocalStorageToken } from "../_hooks/useSetLocalStorageToken";
import { useAuthLoaded } from "../_hooks/useAuthLoaded";

export const AuthLoader = ({ children }: PropsWithChildren) => {

    const loaded = useAuthLoaded()
    const setLocalStorageToken = useSetLocalStorageToken()
    const loadLocalStorageToken = useLoadLocalStorageToken()

    useEffect(() => {
        if (loaded) {
            setLocalStorageToken()
        } else {
            loadLocalStorageToken()
        }
    }, [loaded, setLocalStorageToken, loadLocalStorageToken])

    return (
        <>
            {children}
        </>
    );
};


