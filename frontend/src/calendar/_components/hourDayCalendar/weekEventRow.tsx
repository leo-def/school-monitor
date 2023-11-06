import React, { useMemo } from "react";
import { differenceInDays } from "date-fns";
import { CalendarEvent } from '@/calendar/_types/calendarEvent'
import './hourDayCalendar.css'

export function WeekEventRow({
    event,
    numberOfCols,
    initDate
}: {
    event: CalendarEvent,
    numberOfCols: number
    initDate: Date
}) {
    const startCardPosition = useMemo(() => (differenceInDays(event.start, initDate) + 2), [event, initDate])
    const endCardPosition = useMemo(() => event.end ? (differenceInDays(event.end, initDate) + 3) : startCardPosition, [event, initDate, startCardPosition])
    return (
        <div style={{
            gridTemplateColumns: `repeat(${numberOfCols}, minmax(0, 1fr))`,
            display: 'grid',
            height: '1rem'
        }}>
            <div style={{ height: '1rem', gridColumnStart: startCardPosition, gridColumnEnd: endCardPosition }}>
                <div style={{
                    fontSize: '0.75rem',
                    lineHeight: '1rem',
                    paddingLeft: '0.5rem',
                    marginLeft: '0.5rem',
                    backgroundColor: event.color,
                    color: 'white',
                    borderRadius: '0.25rem'
                }}>{event.title}
                </div>
            </div>
        </div>)
}
