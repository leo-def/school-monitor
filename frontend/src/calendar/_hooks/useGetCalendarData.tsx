import { useContext } from "react";
import { CalendarDataContext, CalendarDataContextValue } from "../_context/calendarDataContext";

export function useGetCalendarData(): CalendarDataContextValue {
    const state = useContext(CalendarDataContext);
    return state;
}