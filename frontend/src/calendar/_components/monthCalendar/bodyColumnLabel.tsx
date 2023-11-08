import React, { useMemo } from "react";
import { useGetCalendarData } from "@/calendar/_hooks/useGetCalendarData";
import { useGetCalendarDateUtils } from "@/calendar/_hooks/useGetCalendarDateUtils";
import { HeaderDay } from "@/calendar/_types/headerDay";

export interface BodyColumnLabelProps {
    readonly weekDay: HeaderDay
    readonly row: number
    readonly weekDaysLength: number
}
export function BodyColumnLabel({ weekDay, row, weekDaysLength }: BodyColumnLabelProps) {
    const { addDays, isSameMonth } = useGetCalendarDateUtils()
    const { initDate, referenceDate } = useGetCalendarData()
    const date = useMemo(() => addDays(initDate, ((weekDaysLength * row) + weekDay.index)), [addDays, initDate, weekDaysLength, row, weekDay.index])
    const backgroundColor = useMemo(() => isSameMonth(referenceDate, date) ? '#FFFFFF' : '#F5F5F5', [date, isSameMonth, referenceDate])
    const day = useMemo(() => date.getDate(), [date])
    return (<div
        className="calendar-body-row-label-column"
        style={{
            fontSize: '14px',
            lineHeight: '30px',
            color: '#70757a',
            textAlign: 'center',
            flex: '1 1 0%',
            backgroundColor
        }}>
        <h2 className="calendar-body-row-label-title" style={{
            marginTop: '8px',
            fontFamily: 'Roboto,Arial,sans-serif',
            fontSize: '12px',
            fontWeight: 500,
            letterSpacing: '.3px',
            display: 'inline-block',
            textAlign: 'center',
            whiteSpace: 'nowrap',
            width: 'max-content',
            minWidth: '24px',
            color: '#70757a',
            lineHeight: '16px',
            pointerEvents: 'auto'
        }}>
            {day}
        </h2>
    </div>)
}