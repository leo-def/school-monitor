'use client'

import { PropsWithChildren, useMemo } from "react";
import { YearCalendarDisplayContext, YearCalendarDisplayContextValue, initialYearCalendarDisplayContextValue } from "../../_context/yearCalendarDisplayContext";


export type YearCalendarDisplayContextProviderProps = { defaultValues: Partial<YearCalendarDisplayContextValue> } & PropsWithChildren;

export const YearCalendarDisplayContextProvider = ({ children, defaultValues }: YearCalendarDisplayContextProviderProps) => {
    const value = useMemo(() => ({
        ...initialYearCalendarDisplayContextValue,
        ...defaultValues
    } as YearCalendarDisplayContextValue), [defaultValues])
    return (
        <YearCalendarDisplayContext.Provider value={value}>
            {children}
        </YearCalendarDisplayContext.Provider>
    );
};