import React from "react";
import { addDays, setHours } from "date-fns";
import { CalendarEvent } from '@/calendar/_types/calendarEvent'
import { CalendarEventSlot } from "@/calendar/_types/calendarEventSlot";
import { Interval } from "@/calendar/_types/interval";
import { Event } from "./event";
import { isOverlapInterval } from "@/calendar/_services/overlap.service";
export interface BodyRowContentProps {
    readonly weekDays: Array<{ index: number, date: Date, day: number, title: string }>,
    readonly row: number,
    readonly initDate: Date
    readonly eventSlots: CalendarEventSlot,
    readonly events: Array<CalendarEvent>,
}


export function BodyRowContent({
    weekDays,
    row,
    initDate,
    eventSlots,
    events,
}: BodyRowContentProps) {

    const initRowDate = addDays(initDate, (weekDays.length * row))
    const endRowDate = setHours(addDays(initDate, ((weekDays.length * (row + 1)) - 1)), 24)
    const rowEvents = events.filter(event => isOverlapInterval(
        event as Interval,
        { start: initRowDate, end: endRowDate } as Interval,
        false))

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