"use client";

import { PropsWithChildren, useContext, useEffect, useState } from "react";
import { ThemeStorageKeyEnum } from "../_enums/themeStorageKey.enum";
import { ThemeContext } from "../_contexts/themeContext";
import { ThemeActionTypeEnum } from "../_enums/themeActionType.enum";
import { LoadThemePayload } from "../_types/payloads/LoadThemePayload";

export const ThemeLoader = ({ children }: PropsWithChildren) => {
    const { dispatch, state } = useContext(ThemeContext);

    const [localTheme, setLocalTheme] = useState(null as string | null)
    // Load context value
    useEffect(() => {
        if (!state || !dispatch) {
            return;
        }
        const { loaded } = state;
        if (!loaded) {
            dispatch({
                type: ThemeActionTypeEnum.LOAD_THEME,
                payload: { theme: localTheme } as LoadThemePayload,
            });
        }
    }, [dispatch, localTheme, state])

    // Load local storage value
    useEffect(() => {
        if (!state || !dispatch) {
            return;
        }
        const { loaded, theme } = state;
        if (loaded && theme && localTheme !== theme) {
            localStorage.setItem(ThemeStorageKeyEnum.THEME, JSON.stringify(theme));
        }
    }, [dispatch, localTheme, state])

    useEffect(() => {
        setLocalTheme(localStorage.getItem(ThemeStorageKeyEnum.THEME))
    }, [setLocalTheme])
    return (
        <>
            {children}
        </>
    );
};