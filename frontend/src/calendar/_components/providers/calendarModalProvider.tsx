"use client";

import { PropsWithChildren, useMemo, useReducer } from "react";
import { calendarModalReducer } from "@/calendar/_reducers/calendarModalReducer";
import { CalendarModalContext, initialCalendarModalStateValue, } from "@/calendar/_context/calendarModalContext";

export const CalendarModalProvider = ({ children }: PropsWithChildren) => {
    const [state, dispatch] = useReducer(calendarModalReducer, initialCalendarModalStateValue);
    const value = useMemo(() => ({ state, dispatch }), [state, dispatch])
    return (
        <CalendarModalContext.Provider value={value}>
            {children}
        </CalendarModalContext.Provider>
    );
};