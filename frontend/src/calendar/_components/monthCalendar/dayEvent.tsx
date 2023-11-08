import React, { useCallback } from "react";
import { CalendarEvent } from "@/calendar/_types/calendarEvent";
import { useGetCalendarEvents } from "@/calendar/_hooks/useGetCalendarEvents";

export interface DayEventProps {
    readonly calendarEvent: CalendarEvent,
}
export function DayEvent({ calendarEvent }: DayEventProps) {
    const { handleOpenEvent } = useGetCalendarEvents()

    const handleOnClick = useCallback((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (handleOpenEvent) {
            handleOpenEvent(event, calendarEvent)
        }
    }, [calendarEvent, handleOpenEvent])

    return (<div
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