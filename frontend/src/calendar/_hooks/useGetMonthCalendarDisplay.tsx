import { useContext } from "react";
import { MonthCalendarDisplayContext, MonthCalendarDisplayContextValue } from "../_context/monthCalendarDisplayContext";

export function useGetMonthCalendarDisplay(): MonthCalendarDisplayContextValue {
    const state = useContext(MonthCalendarDisplayContext);
    return state;
}