import React from 'react'
import { backgroundBorderTop, backgroundHeaderLeft } from '@/calendar/_commons/styles'
import { useGetDayCalendarDisplay } from '@/calendar/_hooks/useGetDayCalendarDisplay'
import { useGetCalendarDateUtils } from '@/calendar/_hooks/useGetCalendarDateUtils'
import '../../_styles/dayCalendar.css'

export function Header() {
    const { format } = useGetCalendarDateUtils()
    const { numberOfCols, days } = useGetDayCalendarDisplay()

    return (<div style={{
        gridTemplateColumns: `repeat(${numberOfCols}, minmax(0, 1fr))`,
        display: 'grid'
    }}>
        {/* 1 row */}
        <div style={{ height: 60 }}></div>
        {days.map((day) =>
            <div key={day.index} style={{ height: 60 }}>
                <div style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    gridTemplateColumns: 'repeat(1, minmax(0, 1fr))',
                    display: 'grid',
                    marginLeft: '0.5rem'

                }}>
                    <div style={{
                        fontSize: '0.75rem',
                        lineHeight: '1rem',
                        textAlign: 'center',
                        textTransform: 'uppercase',
                        fontWeight: 500,
                    }}>
                        {format(day.date, 'eee')}
                    </div>
                    <div style={{
                        fontSize: '1.125rem',
                        lineHeight: '1.75rem',
                        textAlign: 'center',
                    }}>
                        <span style={{
                            fontWeight: 400,
                            width: 50,
                            height: 50,
                            borderRadius: '100%',
                            ...(day.isToday ? {
                                color: 'white',
                                backgroundColor: 'rgb(25,103,210)'
                            } : {})
                        }}>{format(day.date, 'dd')}</span>
                    </div>
                </div>
            </div>)}

        <div style={{ height: 60, width: '1rem' }}>
            <div style={{ height: 60, marginLeft: '0.5rem' }}></div>
        </div>


        {/* 2 row */}
        <div style={{ height: 5 }} ></div>

        {days.map((day) =>
            <div key={day.index} style={{ height: 5 }}>
                <div style={{ height: 5, marginLeft: '0.5rem', ...backgroundHeaderLeft }}></div>
            </div>)}

        <div style={{ height: 5, width: '4em' }}>
            <div style={{ height: 5, marginLeft: '0.5rem', ...backgroundHeaderLeft }}></div>
        </div>

        {/* 3 row */}
        <div style={{ height: 5 }}></div>

        {days.map((day) =>
            <div key={day.index} style={{ height: 5, ...backgroundBorderTop }}>
                <div style={{ height: 5, marginLeft: '0.5rem', ...backgroundHeaderLeft }}></div>
            </div>)}

        <div style={{ height: 5, width: '1rem', ...backgroundBorderTop }}>
            <div style={{ height: 5, marginLeft: '0.5rem', ...backgroundHeaderLeft }}></div>
        </div>
    </div >)
}