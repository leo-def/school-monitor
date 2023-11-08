import React, { useEffect, useMemo } from "react";
import { CalendarDataContextProvider } from "./providers/calendarDataContextProvider";
import { MonthCalendarDisplay } from "./monthCalendar/monthCalendarDisplay";
import { useGetCalendarDateUtils } from "../_hooks/useGetCalendarDateUtils";
import { NUMBER_OF_MOTH_CALENDAR_DAYS } from "../_commons/constants";
import "../_styles/dayCalendar.css";

export interface MonthCalendarProps {
    readonly referenceDate: Date;
    readonly handleLoadEndDate?: (date: Date) => void;
    readonly handleLoadInitialDate?: (date: Date) => void;
}


export function MonthCalendar({ handleLoadEndDate, handleLoadInitialDate, ...props }: MonthCalendarProps) {
    const numberOfDays = NUMBER_OF_MOTH_CALENDAR_DAYS
    const { addDays, startOfWeek, startOfMonth, startOfDay, endOfDay } = useGetCalendarDateUtils()
    const referenceDate = useMemo(() => props.referenceDate ?? new Date(), [props.referenceDate])
    const initDate = useMemo(() => startOfDay(startOfWeek(startOfMonth(referenceDate ?? new Date()))), [referenceDate, startOfDay, startOfMonth, startOfWeek])
    const endDate = useMemo(() => endOfDay(addDays(initDate, (numberOfDays ?? 1) - 1)), [addDays, endOfDay, initDate, numberOfDays])

    const calendarData = useMemo(() => initDate && endDate
        ? ({
            numberOfDays: numberOfDays ?? 1,
            referenceDate,
            initDate,
            endDate
        })
        : undefined, [
        numberOfDays,
        referenceDate,
        initDate,
        endDate
    ])

    useEffect(() => {
        if (handleLoadEndDate) {
            handleLoadEndDate(endDate)
        }
    }, [handleLoadEndDate, endDate])
    useEffect(() => {
        if (handleLoadInitialDate) {
            handleLoadInitialDate(initDate)
        }
    }, [handleLoadInitialDate, initDate])

    return calendarData ? (<CalendarDataContextProvider defaultValues={calendarData}> <MonthCalendarDisplay /></CalendarDataContextProvider>) : undefined
}

