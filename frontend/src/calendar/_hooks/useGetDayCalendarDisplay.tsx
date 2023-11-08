import { useContext } from "react";
import { DayCalendarDisplayContext, DayCalendarDisplayContextValue } from "../_context/dayCalendarDisplayContext";

export function useGetDayCalendarDisplay(): DayCalendarDisplayContextValue {
    const state = useContext(DayCalendarDisplayContext);
    return state;
}