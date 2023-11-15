import { useCallback, useMemo, useRef } from 'react'
import { CalendarEvent } from '@/calendar/_types/calendarEvent'
import { useGetCalendarDateUtils } from '@/calendar/_hooks/useGetCalendarDateUtils'
import '../../_styles/dayCalendar.css'
import { useGetCalendarEvents } from '@/calendar/_hooks/useGetCalendarEvents'
import { useOpenCalendarModal } from '@/calendar/_hooks/useOpenCalendarModal'

export interface DayEventProps {
    date: Date,
    calendarEvent: CalendarEvent
    slot: number
}

export function calculateTopPosition(differenceInMinutes: number) {
    return ((differenceInMinutes * 50) / 60)
}

export function DayEvent({ date, calendarEvent, slot }: DayEventProps) {
    const buttonRef = useRef<HTMLDivElement>(null);
    const openCalendarModal = useOpenCalendarModal()
    const { handleOpenEvent } = useGetCalendarEvents()
    const { differenceInMinutes } = useGetCalendarDateUtils()
    const top = useMemo(() => calculateTopPosition(differenceInMinutes(calendarEvent.start, date)), [date, differenceInMinutes, calendarEvent.start])
    const height = useMemo(() => calculateTopPosition(differenceInMinutes(calendarEvent.end, date)) - top, [date, differenceInMinutes, calendarEvent.end, top])

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

    return (height ? <div
        ref={buttonRef}
        onKeyDown={handleOnKeyDown}
        onClick={handleOnClick}
        style={{
            backgroundColor: calendarEvent.color,
            top,
            height,
            minHeight: '1rem',
            left: `${slot / 2}em`,
            width: 'auto',
            borderRadius: '4px',
            position: 'absolute',
            pointerEvents: 'auto',
        }}>
        <div style={{
            backgroundColor: 'rgb(3, 155, 229)',
            borderRadius: '4px 0 0 4px',
            position: 'absolute',
            top: 0,
            width: '4px',
            height: '100%'
        }}>
        </div>
        <div style={{
            color: 'white',
            fontSize: '0.75rem',
            lineHeight: '1rem',
            maxHeight: '100%',
            overflow: 'hidden',
            paddingLeft: '8px',
            textAlign: 'left',
            display: 'flex',
            fontFamily: 'Roboto,Helvetica,Arial,sans-serif'
        }}> {calendarEvent.title}
        </div>
    </div> : undefined)
}