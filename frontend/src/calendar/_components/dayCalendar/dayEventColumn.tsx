import React, { useMemo } from "react";
import { useGetEventSlots } from "@/calendar/_hooks/useGetEventSlots";
import { useGetCalendarDateUtils } from "@/calendar/_hooks/useGetCalendarDateUtils";
import { useGetCalendarEvents } from "@/calendar/_hooks/useGetCalendarEvents";
import { DayEvent } from "./dayEvent";
import "@/calendar/_styles/dayCalendar.css";

export interface DayEventColumnProps {
    readonly date: Date
}
export function DayEventColumn({ date }: DayEventColumnProps) {
    const { startOfDay, endOfDay, isAfter } = useGetCalendarDateUtils()
    const { events } = useGetCalendarEvents()

    const { initDate, endDate } = useMemo(
        () => ({ initDate: startOfDay(date), endDate: endOfDay(date) })
        , [date, endOfDay, startOfDay])

    const hourEvents = useMemo(
        () => events
            .filter(event => !isAfter(initDate, event.start) && !isAfter(event.end, endDate))
            .sort((a, b) => a.start.getTime() - b.start.getTime())
        , [events, isAfter, initDate, endDate])

    const eventSlots = useGetEventSlots(hourEvents)

    return (<div style={{ marginLeft: '0.5rem', minHeight: 1200, position: 'relative' }}>
        {hourEvents.map((event) => (<DayEvent key={event.id} date={date} calendarEvent={event} slot={eventSlots[event.id]} />))}
    </div>)
}
