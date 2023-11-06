import { Dispatch, useContext } from "react";
import { CalendarDataContext } from "../_context/calendarDataCotext";
import { CalendarDataDispatchParam } from "../_types/caledarDataContext";

export function useDispatchCalendarData(): Dispatch<CalendarDataDispatchParam> {
    const { dispatch } = useContext(CalendarDataContext);
    if (!dispatch) {
        throw new Error('dispach undefined')
    }
    return dispatch;
} 
