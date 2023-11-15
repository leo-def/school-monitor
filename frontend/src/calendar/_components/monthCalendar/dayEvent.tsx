import React, { useCallback, useRef } from "react";
import { CalendarEvent } from "@/calendar/_types/calendarEvent";
import { useGetCalendarEvents } from "@/calendar/_hooks/useGetCalendarEvents";
import { useOpenCalendarModal } from "@/calendar/_hooks/useOpenCalendarModal";

export interface DayEventProps {
    readonly calendarEvent: CalendarEvent,
}
export function DayEvent({ calendarEvent }: DayEventProps) {
    const buttonRef = useRef<HTMLDivElement>(null);
    const openCalendarModal = useOpenCalendarModal()
    const { handleOpenEvent } = useGetCalendarEvents()

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


    return (<div
        ref={buttonRef}
        onKeyDown={handleOnKeyDown}
        onClick={handleOnClick}
        style={{
            backgroundColor: calendarEvent.color,
            cursor: 'pointer',
            fontWeight: 500,
            height: '22px',
            padding: '0 8px',
            lineHeight: '20px',
            color: '#fff',
            fontSize: '12px',
            borderRadius: '4px',
            boxSizing: 'border-box',
            pointerEvents: 'auto',
            overflow: 'hidden',
            display: 'flex',
            outline: 'none',
            alignItems: 'center',
            transition: 'background-color .1s linear',
            width: '100%',
        }}>
        <span style={{
            WebkitBoxAlign: 'center',
            alignItems: 'center',
            display: 'flex',
            overflow: 'hidden',
            fontWeight: 500,
            lineHeight: '20px',
            color: '#fff',
            fontSize: '12px',
        }}>
            <span style={{
                overflow: 'hidden',
                WebkitBoxFlex: '0',
                flex: '0 1 auto',
                whiteSpace: 'nowrap',
                cursor: 'pointer',
                fontWeight: '500',
                lineHeight: '20px',
                color: '#fff',
                fontSize: '12p',
                pointerEvents: 'none',
            }}>
                {calendarEvent.title ?? ''}
            </span>
        </span>

    </div>)
}