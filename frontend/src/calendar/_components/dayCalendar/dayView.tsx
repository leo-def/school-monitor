import React, { useMemo } from "react"
import { Interval } from "@/calendar/_types/interval";
import { useGetCalendarEvents } from "@/calendar/_hooks/useGetCalendarEvents";
import { useGetCalendarData } from "@/calendar/_hooks/useGetCalendarData"
import { useGetCalendarDateUtils } from "@/calendar/_hooks/useGetCalendarDateUtils"
import { isOverlapInterval } from "@/calendar/_hooks/useGetOverlaps"
import { DayViewBackground } from "./dayViewBackground"
import { DayViewContent } from "./dayViewContent"
import "../../_styles/dayCalendar.css"

export function DayView() {
    const { initDate, endDate } = useGetCalendarData()
    const dateUtils = useGetCalendarDateUtils()
    const { isFullDay } = dateUtils
    const { events } = useGetCalendarEvents()
    const fullDayEvents = useMemo(() => events.filter(event =>
        isFullDay(event.end, event.start) &&
        isOverlapInterval(event as Interval, { start: initDate, end: endDate } as Interval, dateUtils, false)
    ), [dateUtils, endDate, events, initDate, isFullDay])
    return (<div className="day-view-wrapper">
        <DayViewBackground fullDayEvents={fullDayEvents} />
        <DayViewContent fullDayEvents={fullDayEvents} />
    </div>)
}