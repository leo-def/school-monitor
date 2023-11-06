import React from 'react'
import { backgroundBorderLeft, backgroundBorderTop } from '@/calendar/_commons/styles'
import { useGetLabelsFormat } from '@/calendar/_hooks/useGetLabelsFormat'
import { TIMES } from '@/calendar/_commons/constants'
import './hourDayCalendar.css'

export function TimeViewBackground({ days, numberOfCols }: { days: Array<{ date: Date, isToday: boolean, index: number }>, numberOfCols: number }) {
    const labelsFormat = useGetLabelsFormat()
    return (<div className="background">
        <div style={{
            gridTemplateColumns: `repeat(${numberOfCols}, minmax(0, 1fr))`,
            display: 'grid'
        }}>

            {TIMES.map((time) => (<React.Fragment key={time}>
                {/* time row */}
                <div style={{ height: 50 }}><div className="hour-view-time-label">{labelsFormat.formatNumberToHourLabel(time)}</div></div>
                {days.map((day) =>
                    <div key={day.index} style={{ height: 50, ...backgroundBorderTop }} >
                        <div style={{
                            height: 50,
                            marginLeft: '0.5rem',
                            ...backgroundBorderLeft
                        }}></div>
                    </div>)}

                <div style={{ height: 50, width: '1rem', ...backgroundBorderTop }}>
                    <div style={{ height: 50, marginLeft: '0.5rem', ...backgroundBorderLeft }}></div>
                </div>
            </React.Fragment>))}

            {/* last time row */}
            <div></div>

            {days.map((day) =>
                <div key={day.index} style={{ height: 5, ...backgroundBorderTop }}>
                    <div style={{ height: 5, marginLeft: '0.5rem', ...backgroundBorderLeft }}></div>
                </div>)}

            <div style={{ height: 5, width: '1rem', ...backgroundBorderTop }}>
                <div style={{ height: 5, marginLeft: '0.5rem', ...backgroundBorderLeft }}></div>
            </div>

        </div>
    </div>
    )
}