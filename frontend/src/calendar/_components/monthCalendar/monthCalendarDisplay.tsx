import React, { useMemo } from "react";
import { useGetEventSlots } from "@/calendar/_hooks/useGetEventSlots";
import { useGetCalendarDateUtils } from "@/calendar/_hooks/useGetCalendarDateUtils";
import { useGetCalendarData } from "@/calendar/_hooks/useGetCalendarData";
import { NUMBER_OF_MONTH_CALENDAR_ROWS, NUMBER_OF_WEEK_DAYS } from "@/calendar/_commons/constants";
import { useGetCalendarEvents } from "@/calendar/_hooks/useGetCalendarEvents";
import { HeaderDay } from "@/calendar/_types/headerDay";
import { MonthCalendarDisplayContextProvider } from "../providers/monthCalendarDisplayProvider";
import { Body } from "./body";
import { Header } from "./header";
import { CalendarModalProvider } from "../providers/calendarModalProvider";
import { CalendarModalContainer } from "../modal/calendarModalContainer";


export function MonthCalendarDisplay() {
    const { addDays, format, getDay } = useGetCalendarDateUtils()
    const { initDate } = useGetCalendarData()
    const { events } = useGetCalendarEvents()

    const eventSlots = useGetEventSlots(events, false)
    const rows = useMemo(() => Array(NUMBER_OF_MONTH_CALENDAR_ROWS).fill(0).map((_, index) => index), [])
    const weekDays = useMemo(() => Array(NUMBER_OF_WEEK_DAYS).fill(0).map((_, index) => {
        const date = addDays(initDate, index);
        return ({ index, date, day: getDay(date), title: format(date, 'eee') }) as HeaderDay
    }), [initDate, addDays, getDay, format])
    const defaultValues = useMemo(() => ({
        eventSlots,
        rows,
        weekDays,
    }), [eventSlots, rows, weekDays])
    return (<CalendarModalProvider>
        <CalendarModalContainer />
        <MonthCalendarDisplayContextProvider defaultValues={defaultValues}>
            <div className="calendar-wrapper" style={{
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
                        <Header />
                        <Body />
                    </div>
                </main>
            </div>
        </MonthCalendarDisplayContextProvider>
    </CalendarModalProvider>)
}


