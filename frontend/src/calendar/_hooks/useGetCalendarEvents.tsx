import { useContext } from "react";
import { CalendarEventsContext, CalendarEventsContextValue } from "../_context/calendarEventsContext";

export function useGetCalendarEvents(): CalendarEventsContextValue {
    const state = useContext(CalendarEventsContext);
    return state;
}