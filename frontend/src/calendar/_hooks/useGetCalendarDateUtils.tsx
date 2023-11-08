import { useContext } from "react";
import { CalendarDateUtilsContext, CalendarDateUtilsContextValue } from "../_context/calendarDateUtilsContext";

export function useGetCalendarDateUtils(): CalendarDateUtilsContextValue {
    const state = useContext(CalendarDateUtilsContext);
    return state;
}