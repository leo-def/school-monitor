import React from "react";
import { CalendarEvent } from '@/calendar/_types/calendarEvent'
import { format } from "date-fns";
export interface HourEventProps {
    readonly event: CalendarEvent,
}
export function HourEvent({ event }: HourEventProps) {

    return (
        <div style={{
            fontWeight: 500,
            cursor: 'pointer',
            color: 'rgb(60,64,67)',
            fill: 'rgb(60,64,67)',
            height: '22px',
            padding: '0 8px',
            lineHeight: '20px',
            fontSize: '12px',
            borderRadius: '4px',
            boxSizing: 'border-box',
            pointerEvents: 'auto',
            overflow: 'hidden',
            display: 'flex',
            outline: 'none',
            WebkitBoxAlign: 'center',
            transition: 'background-color .1s linear',
            alignItems: 'center',
            border: '1px solid transparent',
        }}>
            <div style={{
                display: 'flex',
                WebkitBoxAlign: 'center',
                alignItems: 'center',
                WebkitBoxFlex: 0,
                flex: 'none',
                WebkitBoxPack: 'center',
                justifyContent: 'center',
                marginRight: '6px',
                fontWeight: '500',
                cursor: 'pointer',
                color: 'rgb(60,64,67)',
                fill: 'rgb(60,64,67)',
                lineHeight: '20px',
                fontSize: '12px',
                pointerEvents: 'auto',
            }}>
                <span className="bullet" style={{
                    borderColor: event.color,
                    borderRadius: '8px',
                    border: '4px solid',
                    height: 0,
                    width: 0,
                    marginRight: '4px'
                }}></span>
            </div>

            <span style={{
                WebkitBoxAlign: 'center',
                alignItems: 'center',
                display: 'flex',
                overflow: 'hidden',
                fontWeight: 500,
                cursor: 'pointer',
                color: 'rgb(60,64,67)',
                fill: 'rgb(60,64,67)',
                lineHeight: '20px',
                fontSize: '12px',
                pointerEvents: 'auto'
            }}>
                <span style={{
                    marginRight: '4px',
                    fontWeight: 400,
                    WebkitBoxFlex: 0,
                    flex: 'none',
                    cursor: 'pointer',
                    color: 'rgb(60,64,67)',
                    fill: 'rgb(60,64,67)',
                    lineHeight: '20px',
                    fontSize: '12px',
                    pointerEvents: 'auto'

                }}>{format(event.start, 'HH:mm')}</span>
                <span style={{
                    overflow: 'hidden',
                    WebkitBoxFlex: '0',
                    flex: '0 1 auto',
                    whiteSpace: 'nowrap',
                    fontWeight: 500,
                    color: 'rgb(60,64,67)',
                    fill: 'rgb(60,64,67)',
                    lineHeight: '20px',
                    fontSize: '12px',
                    pointerEvents: 'auto'
                }}>{event.title ?? ''}</span>
            </span>

        </div >
    )
}