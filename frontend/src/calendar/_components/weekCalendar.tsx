import React, { useEffect, useMemo } from "react";
import { CalendarDataContextProvider } from "./providers/calendarDataContextProvider";
import { DayCalendarDisplay } from "./dayCalendar/dayCalendarDisplay";
import { useGetCalendarDateUtils } from "../_hooks/useGetCalendarDateUtils";
import "../_styles/dayCalendar.css";
import { NUMBER_OF_WEEK_DAYS } from "../_commons/constants";

export interface WeekCalendarProps {
    readonly referenceDate: Date;
    readonly handleLoadEndDate?: (date: Date) => void;
    readonly handleLoadInitialDate?: (date: Date) => void;
}
export function WeekCalendar({ handleLoadEndDate, handleLoadInitialDate, ...props }: WeekCalendarProps) {
    const numberOfDays = NUMBER_OF_WEEK_DAYS
    const { addDays, startOfWeek, startOfDay, endOfDay } = useGetCalendarDateUtils()
    const referenceDate = useMemo(() => props.referenceDate ?? new Date(), [props.referenceDate])
    const initDate = useMemo(() => startOfDay(startOfWeek(referenceDate ?? new Date())), [referenceDate, startOfDay, startOfWeek])
    const endDate = useMemo(() => endOfDay(addDays(initDate, (numberOfDays ?? 1) - 1)), [addDays, endOfDay, initDate, numberOfDays])

    const calendarData = useMemo(() => initDate && endDate ? ({
        numberOfDays: numberOfDays ?? 1,
        referenceDate,
        initDate,
        endDate
    }) : undefined, [
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

    return calendarData ? (<CalendarDataContextProvider defaultValues={calendarData}> <DayCalendarDisplay /></CalendarDataContextProvider>) : undefined
}
