import React from "react";
import { CalendarEvent } from '@/calendar/_types/calendarEvent'
export interface DayEventProps {
    readonly event: CalendarEvent,
}
export function DayEvent({ event }: DayEventProps) {
    return (<div style={{
        backgroundColor: event.color,
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
                {event.title ?? ''} ({event.start.toLocaleDateString()} - {event.end ? event.end.toLocaleDateString() : ''} )
            </span>
        </span>

    </div>)
}