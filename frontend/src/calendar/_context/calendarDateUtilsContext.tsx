'use client'

import { createContext } from "react";

export interface CalendarDateUtilsContextValue {
    startOfWeek: (date: Date | number) => Date;
    addDays: (date: Date | number, amount: number) => Date;
    addMonths: (date: Date | number, amount: number) => Date;
    format: (date: Date | number, format: string) => string;
    getDay: (date: Date | number) => 0 | 1 | 2 | 3 | 4 | 5 | 6;
    startOfMonth: (date: Date | number) => Date;
    isSameDay: (dateLeft: Date | number, dateRight: Date | number) => boolean;
    isSameMonth: (dateLeft: Date | number, dateRight: Date | number) => boolean;
    setHours: (date: Date | number, hours: number) => Date;
    differenceInDays: (dateLeft: Date | number, dateRight: Date | number) => number;
    isBefore: (date: Date | number, dateToCompare: Date | number) => boolean;
    isAfter: (date: Date | number, dateToCompare: Date | number) => boolean;
    differenceInMinutes: (
        dateLeft: Date | number,
        dateRight: Date | number
    ) => number;
    setMonth: (date: Date | number, month: number) => Date;
    isFullDay: (dateLeft: Date | number, dateRight: Date | number) => boolean;
    startOfDay: (date: Date | number) => Date,
    startOfYear: (date: Date | number) => Date,
    endOfDay: (date: Date | number) => Date,
}

export const CalendarDateUtilsContext = createContext<CalendarDateUtilsContextValue>(undefined!);

