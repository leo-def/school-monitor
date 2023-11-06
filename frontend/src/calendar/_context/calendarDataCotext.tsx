'use client'

import { createContext } from "react";
import { CalendarDataContextValue, initialCalendarDataState } from "../_types/caledarDataContext";



export const CalendarDataContext = createContext({
    state: initialCalendarDataState,
} as CalendarDataContextValue);

