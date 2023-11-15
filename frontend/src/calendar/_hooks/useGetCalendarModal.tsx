import { useContext } from "react";
import { CalendarModalContext, CalendarModalContextValue } from "../_context/calendarModalContext";


export function useGetCalendarModal(): CalendarModalContextValue | undefined {
    const contextValue = useContext(CalendarModalContext);
    return contextValue
}