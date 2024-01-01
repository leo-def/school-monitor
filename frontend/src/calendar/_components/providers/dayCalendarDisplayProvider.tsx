"use client";

import { PropsWithChildren, useMemo } from "react";
import { DayCalendarDisplayContext, DayCalendarDisplayContextValue, initialDayCalendarDisplayContextValue } from "../../_context/dayCalendarDisplayContext";


export type DayCalendarDisplayContextProviderProps = { defaultValues: Partial<DayCalendarDisplayContextValue> } & PropsWithChildren;

export const DayCalendarDisplayContextProvider = ({ children, defaultValues }: DayCalendarDisplayContextProviderProps) => {
    const value = useMemo(() => ({
        ...initialDayCalendarDisplayContextValue,
        ...defaultValues
    } as DayCalendarDisplayContextValue), [defaultValues])
    return (
        <DayCalendarDisplayContext.Provider value={value}>
            {children}
        </DayCalendarDisplayContext.Provider>
    );
};