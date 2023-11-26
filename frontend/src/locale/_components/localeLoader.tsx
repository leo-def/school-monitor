'use client'

import { PropsWithChildren, useContext, useEffect } from "react";
import { LocaleStorageKeyEnum } from "../_enums/localeStorageKey.enum";
import { Locale } from "../_types/locale";
import { LocaleContext } from "../_contexts/localeContext";
import { LocaleActionTypeEnum } from "../_enums/localeActionType.enum";
import { LoadLocationPayload } from "../_types/payloads/loadLocationPayload";

export const LocaleLoader = ({ children }: PropsWithChildren) => {
    const { dispatch, state } = useContext(LocaleContext);

    // Load context value
    useEffect(() => {
        const localLocaleStr = localStorage.getItem(LocaleStorageKeyEnum.LOCALE);
        const localLocale = localLocaleStr ? JSON.parse(localLocaleStr) as Locale : undefined;
        if (!state || !dispatch) {
            return;
        }
        const { loaded } = state;
        if (!loaded) {
            dispatch({
                type: LocaleActionTypeEnum.LOAD_LOCALE,
                payload: { locale: localLocale } as LoadLocationPayload,
            });
        }
    }, [dispatch, state])

    // Load local storage value
    useEffect(() => {
        if (!state || !dispatch) {
            return;
        }
        const { loaded, locale } = state;
        const localLocaleStr = localStorage.getItem(LocaleStorageKeyEnum.LOCALE);
        const localLocale = localLocaleStr ? JSON.parse(localLocaleStr) as Locale : undefined;
        if (loaded && locale?.id && localLocale?.id !== locale?.id) {
            localStorage.setItem(LocaleStorageKeyEnum.LOCALE, JSON.stringify(locale));
        }
    }, [dispatch, state])

    return (
        <>
            {children}
        </>
    );
};