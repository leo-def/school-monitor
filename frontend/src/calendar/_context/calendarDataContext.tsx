'use client'

import { createContext } from "react";
import { CalendarViewTypeEnum } from "../_enums/calendarViewType.enum";

export interface CalendarDataContextValue {
    viewType: CalendarViewTypeEnum;
    referenceDate: Date;
    initDate: Date;
    endDate: Date;
    currDate: Date;
    numberOfDays: number;
}
export const initialCalendarDataContextValue = {
} as CalendarDataContextValue;

export const CalendarDataContext = createContext<CalendarDataContextValue>(initialCalendarDataContextValue);

