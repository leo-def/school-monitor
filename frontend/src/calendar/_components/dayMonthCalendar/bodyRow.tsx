import React from "react";
import { addDays, setHours } from "date-fns";
import { CalendarEvent } from '@/calendar/_types/calendarEvent'
import { CalendarEventSlot } from "@/calendar/_types/calendarEventSlot";
import { BodyRowBackground } from "./bodyRowBackground";
import { BodyRowContent } from "./bodyRowContent";
import { BodyRowLabel } from "./bodyRowLabel";

export interface BodyRowProps {
    readonly weekDays: Array<{ index: number, date: Date, day: number, title: string }>,
    readonly row: number,
    readonly eventSlots: CalendarEventSlot,
    readonly events: Array<CalendarEvent>,
    readonly initDate: Date
}
export function BodyRow({ weekDays, row, eventSlots, events, initDate }: BodyRowProps) {

    return (<div
        className="calendar-body-row"
        style={{
            position: 'relative',
            overflow: 'hidden',
            borderBottom: 'rgb(218,220,224) 1px solid',
            display: 'flex',
            flex: '1 1 0%',
        }}>
        <BodyRowBackground weekDays={weekDays} />
        <BodyRowLabel weekDays={weekDays} row={row} initDate={initDate} />
        <BodyRowContent weekDays={weekDays} row={row} initDate={initDate} eventSlots={eventSlots} events={events} />
    </div>)
}