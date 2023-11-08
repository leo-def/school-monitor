'use client'

import { PropsWithChildren, useMemo } from "react";
import { CalendarEventsContext, CalendarEventsContextValue, initialCalendarEventsContextValue, } from "../../_context/calendarEventsContext";

export type CalendarEventsContextProviderProps = { defaultValues: Partial<CalendarEventsContextValue> } & PropsWithChildren;

export const CalendarEventsContextProvider = ({ children, defaultValues }: CalendarEventsContextProviderProps) => {


    const value = useMemo(() => ({
        ...initialCalendarEventsContextValue,
        ...defaultValues
    } as CalendarEventsContextValue), [defaultValues])
    return (
        <CalendarEventsContext.Provider value={value}>
            {children}
        </CalendarEventsContext.Provider>
    );
};