import React, { useMemo } from "react";
import { CalendarEvent } from '@/calendar/_types/calendarEvent'
import { useGetCalendarDateUtils } from "@/calendar/_hooks/useGetCalendarDateUtils";
import { DayEvent } from "./dayEvent";
import { HourEvent } from "./hourEvent";

export interface EventProps {
    readonly event: CalendarEvent,
    readonly slot: number,
    readonly initRowDate: Date

}
export function getColumnPositionInRow(column: number) {
    return `${((100 / 7) * column).toFixed(2)}%`
}
export function Event({ event, slot, initRowDate }: EventProps) {
    const { differenceInDays, isBefore, isFullDay } = useGetCalendarDateUtils()
    const startColumn = useMemo(() => isBefore(event.start, initRowDate) ? 0 : differenceInDays(event.start, initRowDate), [differenceInDays, event.start, initRowDate, isBefore])
    const colsNumber = useMemo(() => (differenceInDays(event.end, initRowDate) + 1) - startColumn, [differenceInDays, event.end, initRowDate, startColumn])
    const left = useMemo(() => getColumnPositionInRow(startColumn), [startColumn])
    const width = useMemo(() => getColumnPositionInRow(colsNumber), [colsNumber])

    return (<div style={{
        position: 'absolute',
        left,
        width,
        top: `${slot}em`,
        paddingRight: '8px',
        height: '24px',
        fontSize: '24px',
        boxSizing: 'border-box',
        pointerEvents: 'none',
        transition: 'transform .3s cubic-bezier(.4,0,.2,1),opacity .3s cubic-bezier(.4,0,.2,1),-webkit-transform .3s cubic-bezier(.4,0,.2,1)',
        WebkitFontSmoothing: 'antialiased',
        listStyle: 'none',
        fontFamily: 'Roboto,Helvetica,Arial,sans-serif'
    }}>
        {isFullDay(event.end, event.start) ? <DayEvent calendarEvent={event} /> : <HourEvent calendarEvent={event} />}
    </div>)
}