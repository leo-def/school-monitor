'use client'

import { PropsWithChildren, useMemo } from "react";
import {
    startOfWeek as startOfWeekDateFns,
    addDays as addDaysDateFns,
    addMonths as addMonthsDateFns,
    format as formatDateFns,
    getDay as getDayDateFns,
    startOfMonth as startOfMonthDateFns,
    isSameDay as isSameDayDateFns,
    isSameMonth as isSameMonthDateFns,
    setHours as setHoursDateFns,
    differenceInDays as differenceInDaysDateFns,
    isBefore as isBeforeDateFns,
    isAfter as isAfterDateFns,
    differenceInMinutes as differenceInMinutesDateFns,
    setMonth as setMonthDateFns,
    startOfDay as startOfDayDateFns,
    startOfYear as startOfYearDateFns,
    endOfDay as endOfDayDateFns,
} from "date-fns";
import { CalendarDateUtilsContext } from "../../_context/calendarDateUtilsContext";


export const CalendarDateFnsUtilsProvider = ({ children }: PropsWithChildren) => {
    const value = useMemo(() => ({
        startOfWeek: (date: Date | number) => startOfWeekDateFns(date),
        addDays: (date: Date | number, amount: number) =>
            addDaysDateFns(date, amount),
        addMonths: (date: Date | number, amount: number) => addMonthsDateFns(date, amount),
        format: (date: Date | number, format: string) => formatDateFns(date, format),
        getDay: (date: Date | number) => getDayDateFns(date),
        startOfMonth: (date: Date | number) => startOfMonthDateFns(date),
        isSameDay: (dateLeft: Date | number, dateRight: Date | number) =>
            isSameDayDateFns(dateLeft, dateRight),
        isSameMonth: (dateLeft: Date | number, dateRight: Date | number) => isSameMonthDateFns(dateLeft, dateRight),
        setHours: (date: Date | number, hours: number) =>
            setHoursDateFns(date, hours),
        differenceInDays: (dateLeft: Date | number, dateRight: Date | number) =>
            differenceInDaysDateFns(dateLeft, dateRight),
        isBefore: (date: Date | number, dateToCompare: Date | number) =>
            isBeforeDateFns(date, dateToCompare),
        isAfter: (date: Date | number, dateToCompare: Date | number) =>
            isAfterDateFns(date, dateToCompare),
        differenceInMinutes: (dateLeft: Date | number, dateRight: Date | number) =>
            differenceInMinutesDateFns(dateLeft, dateRight),
        setMonth: (date: Date | number, month: number) =>
            setMonthDateFns(date, month),
        isFullDay: (dateLeft: Date | number, dateRight: Date | number) => !isSameDayDateFns(dateLeft, dateRight),
        startOfDay: (date: Date | number) => startOfDayDateFns(date),
        startOfYear: (date: Date | number) => startOfYearDateFns(date),
        endOfDay: (date: Date | number) => endOfDayDateFns(date)
    }), [])
    return (
        <CalendarDateUtilsContext.Provider value={value}>
            {children}
        </CalendarDateUtilsContext.Provider>
    );
};