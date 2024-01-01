"use client";

import { PropsWithChildren, useMemo } from "react";
import { MonthCalendarDisplayContext, MonthCalendarDisplayContextValue, initialMonthCalendarDisplayContextValue } from "../../_context/monthCalendarDisplayContext";


export type MonthCalendarDisplayContextProviderProps = { defaultValues: Partial<MonthCalendarDisplayContextValue> } & PropsWithChildren;

export const MonthCalendarDisplayContextProvider = ({ children, defaultValues }: MonthCalendarDisplayContextProviderProps) => {
    const value = useMemo(() => ({
        ...initialMonthCalendarDisplayContextValue,
        ...defaultValues
    } as MonthCalendarDisplayContextValue), [defaultValues])
    return (
        <MonthCalendarDisplayContext.Provider value={value}>
            {children}
        </MonthCalendarDisplayContext.Provider>
    );
};