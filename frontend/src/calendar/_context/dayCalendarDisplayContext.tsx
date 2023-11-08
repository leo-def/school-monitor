'use client'

import { createContext } from "react";
import { HeaderDay } from "../_types/headerDay";

export interface DayCalendarDisplayContextValue {
    numberOfCols: number
    days: HeaderDay[]
}

export const initialDayCalendarDisplayContextValue = {
} as DayCalendarDisplayContextValue;

export const DayCalendarDisplayContext = createContext<DayCalendarDisplayContextValue>(initialDayCalendarDisplayContextValue);
