"use client";

import React, { ReactNode, PropsWithChildren } from "react";
import i18n from "@/commons/i18n/i18n";

export interface I18nWrapperProps extends PropsWithChildren {
    readonly children: ReactNode | undefined
}

export function I18nWrapper({ children }: I18nWrapperProps) {
    return (
        <React.StrictMode>
            <html lang={i18n.language}>
                {children}
            </html>
        </React.StrictMode>)
}