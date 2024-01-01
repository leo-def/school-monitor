"use client";

import { PropsWithChildren } from "react";
import { CalendarDateUtilsContext, CalendarDateUtilsContextValue } from "@/calendar/_context/calendarDateUtilsContext";


export type CalendarDateUtilsContextProviderProps = { defaultValues: CalendarDateUtilsContextValue } & PropsWithChildren;

export const CalendarDateUtilsContextProvider = ({ children, defaultValues }: CalendarDateUtilsContextProviderProps) => {
    return (
        <CalendarDateUtilsContext.Provider value={defaultValues}>
            {children}
        </CalendarDateUtilsContext.Provider>
    );
};