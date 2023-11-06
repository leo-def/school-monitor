import React from 'react'
import { WeekEventRow } from './/weekEventRow'
import { CalendarEvent } from '@/calendar/_types/calendarEvent'
import './hourDayCalendar.css'

export function DayViewContent({ numberOfCols, weekEvents, initDate }: { numberOfCols: number, weekEvents: Array<CalendarEvent>, initDate: Date, }) {
    return (<div className="day-view-content">
        {weekEvents.map((event) => {
            return (<WeekEventRow
                key={event.id}
                event={event}
                numberOfCols={numberOfCols}
                initDate={initDate}
            />)
        })
        }

    </div>)
}

