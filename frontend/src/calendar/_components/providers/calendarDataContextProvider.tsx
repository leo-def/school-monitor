'use client'

import { PropsWithChildren, useMemo } from "react";
import { CalendarDataContext, CalendarDataContextValue, initialCalendarDataContextValue, } from "../../_context/calendarDataContext";

export type CalendarDataContextProviderProps = { defaultValues: Partial<CalendarDataContextValue> } & PropsWithChildren;

export const CalendarDataContextProvider = ({ children, defaultValues }: CalendarDataContextProviderProps) => {


    const value = useMemo(() => ({
        ...initialCalendarDataContextValue,
        ...defaultValues
    } as CalendarDataContextValue), [defaultValues])
    return (
        <CalendarDataContext.Provider value={value}>
            {children}
        </CalendarDataContext.Provider>
    );
};