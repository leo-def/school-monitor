import React, { useMemo } from "react";
import { Interval } from "@/calendar/_types/interval";
import { isOverlapInterval } from "@/calendar/_hooks/useGetOverlaps";
import { useGetCalendarData } from "@/calendar/_hooks/useGetCalendarData";
import { useGetCalendarDateUtils } from "@/calendar/_hooks/useGetCalendarDateUtils";
import { useGetCalendarEvents } from "@/calendar/_hooks/useGetCalendarEvents";
import { useGetMonthCalendarDisplay } from "@/calendar/_hooks/useGetMonthCalendarDisplay";
import { Event } from "./event";

export interface BodyRowContentProps {
    readonly row: number,
}

export function BodyRowContent({
    row,
}: BodyRowContentProps) {
    const { weekDays, eventSlots } = useGetMonthCalendarDisplay()
    const dateUtils = useGetCalendarDateUtils()
    const { addDays, setHours } = dateUtils
    const { events } = useGetCalendarEvents()
    const { initDate } = useGetCalendarData()

    const initRowDate = useMemo(() => addDays(initDate, (weekDays.length * row)), [addDays, initDate, row, weekDays.length])
    const endRowDate = useMemo(() => setHours(addDays(initDate, ((weekDays.length * (row + 1)) - 1)), 24), [addDays, initDate, row, setHours, weekDays.length])
    const rowEvents = useMemo(() => events.filter(event => isOverlapInterval(event as Interval, { start: initRowDate, end: endRowDate } as Interval, dateUtils, false))
        , [dateUtils, endRowDate, events, initRowDate])

    return (<div className="calendar-body-row-content" style={{
        marginTop: '30px',
        flex: '1 1 0%',
    }}>
        <div style={{ height: '2em', position: 'relative' }}>
            <div className="calendar-body-row-content-column" style={{
                flex: '1 1 0%',
                borderRight: '1px solid transparent'
            }}>
                <div>
                    {rowEvents.map(event => (<React.Fragment key={event.id}>
                        <Event event={event} slot={eventSlots[event.id]} initRowDate={initRowDate} />
                    </React.Fragment>))}
                </div>
            </div>

        </div>

    </div >)
}