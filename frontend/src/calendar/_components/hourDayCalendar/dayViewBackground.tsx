import React from 'react'
import { backgroundHeaderLeft } from '@/calendar/_commons/styles'
import { CalendarEvent } from '@/calendar/_types/calendarEvent'
import './hourDayCalendar.css'

export function DayViewBackground({ days, numberOfCols, weekEvents }: { days: Array<{ date: Date, isToday: boolean, index: number }>, numberOfCols: number, weekEvents: Array<CalendarEvent> }) {
    return (<div className="day-view-background">
        <div style={{
            gridTemplateColumns: `repeat(${numberOfCols}, minmax(0, 1fr))`,
            display: 'grid'
        }}>
            {/* week events row */}
            {weekEvents.map((event) => (<React.Fragment key={event.id}>
                <div style={{ height: '1rem' }}></div>

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