import React, { useMemo } from 'react'
import { WeekEventRow } from './weekEventRow'
import { CalendarEvent } from '@/calendar/_types/calendarEvent'
import '../../_styles/dayCalendar.css'

export interface DayViewContentProps {
    fullDayEvents: Array<CalendarEvent>
}
export function DayViewContent({ fullDayEvents }: DayViewContentProps) {
    return (<div className="day-view-content">
        {fullDayEvents.map((event) => {
            return (<WeekEventRow
                key={event.id}
                calendarEvent={event}
            />)
        })
        }

    </div>)
}

