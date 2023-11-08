import { useContext } from "react";
import { YearCalendarDisplayContext, YearCalendarDisplayContextValue } from "../_context/yearCalendarDisplayContext";

export function useGetYearCalendarDisplay(): YearCalendarDisplayContextValue {
    const state = useContext(YearCalendarDisplayContext);
    return state;
}