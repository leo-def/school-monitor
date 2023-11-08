import React, { useMemo } from 'react'
import { backgroundHeaderLeft } from '@/calendar/_commons/styles'
import { useGetDayCalendarDisplay } from '@/calendar/_hooks/useGetDayCalendarDisplay'
import { CalendarEvent } from '@/calendar/_types/calendarEvent'
import '../../_styles/dayCalendar.css'

export interface DayViewBackgroundProps {
    fullDayEvents: Array<CalendarEvent>
}
export function DayViewBackground({ fullDayEvents }: DayViewBackgroundProps) {
    const { numberOfCols, days } = useGetDayCalendarDisplay()
    return (<div className="day-view-background">
        <div style={{
            gridTemplateColumns: `repeat(${numberOfCols}, minmax(0, 1fr))`,
            display: 'grid'
        }}>
            {/* week events row */}
            {fullDayEvents.map((event) => (<React.Fragment key={event.id}>
                <div style={{ height: '1rem', marginTop: '2px' }}></div>

                {days.map((day) =>
                    <div key={day.index} style={{ height: '1rem' }}>
                        <div style={{ marginLeft: '0.5rem', height: '1rem', ...backgroundHeaderLeft }}></div>
                    </div>)}

                <div style={{ height: '1rem', width: '1rem' }}>
                    <div style={{ marginLeft: '0.5rem', height: '1rem', ...backgroundHeaderLeft }}></div>
                </div>

            </React.Fragment>))}
        </div>
    </div>)
}