import { useContext } from "react";
import { CalendarDataContext } from "../_context/calendarDataCotext";
import { CalendarDataState } from "../_types/caledarDataContext";

export function useGetCalendarData(): CalendarDataState {
    const { state } = useContext(CalendarDataContext);
    return state;
}