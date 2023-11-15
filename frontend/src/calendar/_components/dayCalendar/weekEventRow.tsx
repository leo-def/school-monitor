import React, { useCallback, useMemo, useRef } from "react";
import { CalendarEvent } from '@/calendar/_types/calendarEvent'
import { useGetCalendarData } from "@/calendar/_hooks/useGetCalendarData";
import '../../_styles/dayCalendar.css'
import { useGetCalendarDateUtils } from "@/calendar/_hooks/useGetCalendarDateUtils";
import { useGetDayCalendarDisplay } from "@/calendar/_hooks/useGetDayCalendarDisplay";
import { useGetCalendarEvents } from "@/calendar/_hooks/useGetCalendarEvents";
import { useOpenCalendarModal } from "@/calendar/_hooks/useOpenCalendarModal";

export interface WeekEventRowProps {
    readonly calendarEvent: CalendarEvent
}
export function WeekEventRow({
    calendarEvent,
}: WeekEventRowProps) {
    const buttonRef = useRef<HTMLDivElement>(null);
    const openCalendarModal = useOpenCalendarModal()
    const { handleOpenEvent } = useGetCalendarEvents()
    const { numberOfCols } = useGetDayCalendarDisplay()
    const { differenceInDays } = useGetCalendarDateUtils()
    const { initDate } = useGetCalendarData()
    const startCardPosition = useMemo(() => (differenceInDays(calendarEvent.start, initDate) + 2), [differenceInDays, calendarEvent.start, initDate])
    const endCardPosition = useMemo(() => calendarEvent.end ? (differenceInDays(calendarEvent.end, initDate) + 3) : startCardPosition, [differenceInDays, calendarEvent.end, initDate, startCardPosition])

    const handleOnKeyDown = useCallback((event: React.KeyboardEvent<HTMLDivElement>) => {
        const rect = buttonRef.current?.getBoundingClientRect()
        if (openCalendarModal) {
            openCalendarModal({
                top: rect?.top ?? 0,
                left: rect?.left ?? 0,
                events: [calendarEvent]
            })
        }
        if (handleOpenEvent) {
            handleOpenEvent(event, calendarEvent)
        }
    }, [calendarEvent, handleOpenEvent, openCalendarModal])

    const handleOnClick = useCallback((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (openCalendarModal) {
            openCalendarModal({
                top: event.clientY,
                left: event.clientX,
                events: [calendarEvent]
            })
        }
        if (handleOpenEvent) {
            handleOpenEvent(event, calendarEvent)
        }
    }, [calendarEvent, handleOpenEvent, openCalendarModal])
    return (
        <div style={{
            gridTemplateColumns: `repeat(${numberOfCols}, minmax(0, 1fr))`,
            display: 'grid',
            height: '1rem',
            marginTop: '2px'
        }}>
            <div
                ref={buttonRef}
                onKeyDown={handleOnKeyDown}
                onClick={handleOnClick}
                style={{
                    height: '1rem',
                    gridColumnStart: startCardPosition,
                    gridColumnEnd: endCardPosition
                }}>
                <div style={{
                    fontSize: '0.75rem',
                    lineHeight: '1rem',
                    paddingLeft: '0.5rem',
                    marginLeft: '0.5rem',
                    backgroundColor: calendarEvent.color,
                    color: 'white',
                    pointerEvents: 'auto',
                    fontFamily: 'Roboto,Helvetica,Arial,sans-serif',
                    borderRadius: '4px',
                    height: '1rem',
                    width: '100%',
                    overflow: 'hidden',
                }}>{calendarEvent.title}
                </div>
            </div>
        </div>)
}
