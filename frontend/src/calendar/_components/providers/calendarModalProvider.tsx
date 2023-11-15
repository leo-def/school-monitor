'use client'

import { PropsWithChildren, useMemo, useReducer } from "react";
import { CalendarModalContext, initialCalendarModalStateValue, } from "../../_context/calendarModalContext";
import { calendarModalReducer } from "@/calendar/_reducers/calendarModalReducer";

export const CalendarModalProvider = ({ children }: PropsWithChildren) => {
    const [state, dispatch] = useReducer(calendarModalReducer, initialCalendarModalStateValue);
    const value = useMemo(() => ({ state, dispatch }), [state, dispatch])
    return (
        <CalendarModalContext.Provider value={value}>
            {children}
        </CalendarModalContext.Provider>
    );
};