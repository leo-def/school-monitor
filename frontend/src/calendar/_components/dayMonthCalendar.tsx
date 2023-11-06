import React, { useMemo } from "react";
import { startOfWeek, addDays, format } from "date-fns";
import { getDay, startOfMonth } from "date-fns/esm";
import { useGetEventSlots } from "@/calendar/_hooks/useGetEventSlots";
import { useGetEvents } from "@/calendar/_hooks/useGetEvents";
import { Body } from "./dayMonthCalendar/body";
import { Header } from "./dayMonthCalendar/header";

const NUMBER_OF_WEEk_DAYS = 7
const NUMBER_OF_ROWS = 5
const NUMBER_OF_DAYS = (NUMBER_OF_WEEk_DAYS * NUMBER_OF_ROWS)

export interface DayMonthCalendarProps {
    readonly referenceDate?: Date
}

export function DayMonthCalendar({ referenceDate }: DayMonthCalendarProps) {
    const firstDayOfMonth = useMemo(() => startOfMonth(referenceDate ?? new Date()), [referenceDate])
    const initDate = useMemo(() => startOfWeek(firstDayOfMonth), [firstDayOfMonth])
    const { dayEvents, weekEvents } = useGetEvents(initDate, NUMBER_OF_DAYS, 24)
    const events = useMemo(() => ([...dayEvents, ...weekEvents]), [dayEvents, weekEvents])
    const eventSlots = useGetEventSlots(events, false)
    const rows = useMemo(() => Array(NUMBER_OF_ROWS).fill(0).map((_, index) => index), [])
    const weekDays = useMemo(() => Array(NUMBER_OF_WEEk_DAYS).fill(0).map((_, index) => {
        const date = addDays(initDate, index);
        return ({ index, date, day: getDay(date), title: format(date, 'eee') })
    }), [initDate])
    return (<div className="calendar-wrapper" style={{
        flex: '1 1 auto',
        overflow: 'hidden',
        position: 'relative',
        height: "100%"
    }}>
        <main className="calendar-container" role="main" style={{
            overflow: 'hidden',
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            outline: 'none'
        }}>
            <div className="calendar-content" role="grid" style={{
                borderLeft: 'rgb(218,220,224) 1px solid',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                marginLeft: '8px',
            }}>

                <Header weekDays={weekDays} />

                <Body weekDays={weekDays} rows={rows} eventSlots={eventSlots} events={events} initDate={initDate} />

            </div>
        </main>
    </div>)
}


