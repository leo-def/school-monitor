import React from 'react'

import { CalendarEvent } from '@/calendar/_types/calendarEvent'
import { TimeViewBackground } from './timeViewBackground'
import { TimeViewContent } from './timeViewContent'
import './hourDayCalendar.css'

export function TimeView({ days, numberOfCols, dayEvents }: { days: Array<{ date: Date, isToday: boolean, index: number }>, numberOfCols: number, dayEvents: Array<CalendarEvent> }) {
    return (<div className="wrapper">
        <TimeViewBackground days={days} numberOfCols={numberOfCols} />
        <TimeViewContent days={days} numberOfCols={numberOfCols} dayEvents={dayEvents} />
    </div>)
}