"use client";

import { createContext } from "react";
import { CalendarEventSlot } from "../_types/calendarEventSlot";
import { HeaderDay } from "../_types/headerDay";

export interface MonthCalendarDisplayContextValue {
    eventSlots: CalendarEventSlot
    rows: number[]
    weekDays: HeaderDay[]
}

export const initialMonthCalendarDisplayContextValue = {
} as MonthCalendarDisplayContextValue;

export const MonthCalendarDisplayContext = createContext<MonthCalendarDisplayContextValue>(initialMonthCalendarDisplayContextValue);
