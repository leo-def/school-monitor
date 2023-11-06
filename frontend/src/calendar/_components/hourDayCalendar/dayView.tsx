import React from 'react'
import { CalendarEvent } from '@/calendar/_types/calendarEvent'
import { DayViewBackground } from './dayViewBackground'
import { DayViewContent } from './dayViewContent'
import './hourDayCalendar.css'

export function DayView({ days, numberOfCols, weekEvents, initDate }: { days: Array<{ date: Date, isToday: boolean, index: number }>, numberOfCols: number, weekEvents: Array<CalendarEvent>, initDate: Date, }) {
    return (<div className="day-view-wrapper">
        <DayViewBackground days={days} numberOfCols={numberOfCols} weekEvents={weekEvents} />
        <DayViewContent numberOfCols={numberOfCols} weekEvents={weekEvents} initDate={initDate} />
    </div>)
}