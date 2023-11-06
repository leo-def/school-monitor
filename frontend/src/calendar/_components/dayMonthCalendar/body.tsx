import React from "react";
import { CalendarEvent } from '@/calendar/_types/calendarEvent'
import { CalendarEventSlot } from "@/calendar/_types/calendarEventSlot";
import { BodyRow } from "./bodyRow";
export interface BodyProps {
    readonly weekDays: Array<{ index: number, date: Date, day: number, title: string }>,
    readonly rows: Array<number>,
    readonly eventSlots: CalendarEventSlot,
    readonly events: Array<CalendarEvent>,
    readonly initDate: Date
}
export function Body({ weekDays, rows, eventSlots, events, initDate }: BodyProps) {
    return (<div
        className="calendar-body"
        style={{
            margin: 0,
            overflow: 'hidden',
            flex: '1 1 0%',
            display: 'flex',
            flexDirection: 'column',
        }}>
        {rows.map(row => <BodyRow key={row} weekDays={weekDays} row={row} eventSlots={eventSlots} events={events} initDate={initDate} />)}
    </div>)
}