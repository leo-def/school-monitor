import { CalendarEvent } from '@/calendar/_types/calendarEvent'
import { differenceInMinutes } from 'date-fns'
import './hourDayCalendar.css'

export function DayEvent({ date, event, column }: { date: Date, event: CalendarEvent, column: number }) {
    const top = ((differenceInMinutes(event.start, date) * 50) / 60)
    const bottom = event.end ? ((differenceInMinutes(event.end, date) * 50) / 60) : 0
    const height = bottom ? bottom - top : 0
    return (height ? <div style={{
        fontSize: '0.75rem',
        lineHeight: '1rem',
        paddingLeft: '0.5rem',
        backgroundColor: event.color,
        color: 'white',
        top,
        height,
        borderRadius: '0.25rem',
        position: 'absolute'
    }}>{event.title}
    </div> : undefined)
}