import React, { useMemo } from "react";
import { CalendarEvent } from '@/calendar/_types/calendarEvent'
import { differenceInDays, isBefore } from "date-fns";
import { DayEvent } from "./dayEvent";
import { HourEvent } from "./hourEvent";

export interface EventProps {
    readonly event: CalendarEvent,
    readonly slot: number,
    readonly initRowDate: Date

}
export function Event({ event, slot, initRowDate }: EventProps) {
    const startColumn = useMemo(() => isBefore(event.start, initRowDate) ? 0 : differenceInDays(event.start, initRowDate), [event.start, initRowDate])
    const colsNumber = useMemo(() => event.end ? ((differenceInDays(event.end, initRowDate) + 1) - startColumn) : 1, [event.end, initRowDate, startColumn])

    const left = useMemo(() => `${((100 / 7) * startColumn).toFixed(2)}%`, [startColumn])
    const width = useMemo(() => `${((100 / 7) * colsNumber).toFixed(2)}%`, [colsNumber])
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
    }}>
        {event.fullDay ? <DayEvent event={event} /> : <HourEvent event={event} />}
    </div>)
}