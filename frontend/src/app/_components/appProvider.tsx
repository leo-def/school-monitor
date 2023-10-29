import { AuthContextProvider } from "@/auth/_components/authContextProvider";
import { NavContextProvider } from "@/nav/_components/navContextProvider";
import React, { PropsWithChildren } from "react";

export function AppProvider({ children }: PropsWithChildren) {
    return (<AuthContextProvider>
        <NavContextProvider>
            {children}
        </NavContextProvider>
    </AuthContextProvider>)
}