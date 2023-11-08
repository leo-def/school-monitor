import React, { useEffect, useMemo } from "react";
import { CalendarDataContextProvider } from "./providers/calendarDataContextProvider";
import { DayCalendarDisplay } from "./dayCalendar/dayCalendarDisplay";
import { useGetCalendarDateUtils } from "../_hooks/useGetCalendarDateUtils";
import "../_styles/dayCalendar.css";

export interface DaysCalendarProps {
    readonly numberOfDays?: number;
    readonly referenceDate: Date;
    readonly handleLoadEndDate?: (date: Date) => void;
    readonly handleLoadInitialDate?: (date: Date) => void;
}
export function DaysCalendar({ numberOfDays, handleLoadEndDate, handleLoadInitialDate, ...props }: DaysCalendarProps) {
    const { addDays, startOfDay, endOfDay } = useGetCalendarDateUtils()
    const referenceDate = useMemo(() => props.referenceDate ?? new Date(), [props.referenceDate])
    const initDate = useMemo(() => startOfDay(referenceDate), [referenceDate, startOfDay])
    const endDate = useMemo(() => endOfDay(addDays(initDate, (numberOfDays ?? 1) - 1)), [addDays, endOfDay, initDate, numberOfDays])

    const calendarData = useMemo(() => initDate && endDate
        ? ({
            numberOfDays: numberOfDays ?? 1,
            referenceDate,
            initDate,
            endDate
        })
        : undefined
        , [
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

