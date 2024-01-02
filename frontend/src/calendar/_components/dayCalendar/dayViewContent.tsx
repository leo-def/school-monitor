import React from "react";
import { CalendarEvent } from "@/calendar/_types/calendarEvent";
import "@/calendar/_styles/dayCalendar.css";
import { WeekEventRow } from "./weekEventRow";

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

