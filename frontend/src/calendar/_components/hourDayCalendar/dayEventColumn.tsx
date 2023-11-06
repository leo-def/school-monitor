import React, { useMemo } from 'react';
import { isSameDay } from 'date-fns'
import { DayEvent } from './dayEvent'
import { CalendarEvent } from '@/calendar/_types/calendarEvent'
import { useGetEventSlots } from '@/calendar/_hooks/useGetEventSlots';
import './hourDayCalendar.css'

export function DayEventColumn({ date, events }: { date: Date, events: Array<CalendarEvent> }) {
    const dayEvents = useMemo(() => events.filter(event => isSameDay(date, event.start)), [events, date])
    const eventSlots = useGetEventSlots(dayEvents)
    return (<div style={{ marginLeft: '0.5rem', minHeight: 1200 }}>
        {dayEvents.map((event) => (<DayEvent key={event.id} date={date} event={event} column={eventSlots[event.id]} />))}
    </div>)
}

