import { useContext } from "react";
import { CalendarDataContext } from "../_context/calendarDataContext";
import { CalendarDataActionTypeEnum, CalendarDataState } from "../_types/caledarDataContext";

export function useUpdateCalendarData(): (payload: Partial<CalendarDataState>) => void {
    const { dispatch } = useContext(CalendarDataContext);
    if (!dispatch) {
        throw new Error('dispatch undefined')
    }
    return (payload: Partial<CalendarDataState>) => {
        dispatch({
            type: CalendarDataActionTypeEnum.UPDATE,
            payload
        })
    };
} 
