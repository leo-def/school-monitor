import React, { useMemo } from 'react'
import { addDays, isSameDay, setHours } from 'date-fns'
import { useGetEvents } from '@/calendar/_hooks/useGetEvents'
import { NUMBER_OF_HOURS } from '../_commons/constants'
import { Header } from './hourDayCalendar/header'
import { DayView } from './hourDayCalendar/dayView'
import { TimeView } from './hourDayCalendar/timeView'
import './hourDayCalendar/hourDayCalendar.css'


export interface HourDayCalendarProps {
    referenceDate?: Date,
    numberOfDays?: number
}

export function HourDayCalendar({ referenceDate, numberOfDays }: HourDayCalendarProps) {
    numberOfDays = numberOfDays || 7
    const currDate = useMemo(() => new Date(), [])
    const initDate = useMemo(() => setHours(referenceDate ?? new Date(), 0), [referenceDate])
    const { dayEvents, weekEvents } = useGetEvents(initDate, numberOfDays - 1, NUMBER_OF_HOURS - 1)
    const numberOfCols = numberOfDays + 2

    const days = useMemo(() => Array(numberOfDays).fill(0).map((_, index) => {
        const date = addDays(initDate, index)
        const isToday = isSameDay(currDate, date)
        return { date, isToday, index }
    }), [numberOfDays, initDate, currDate])

    return (<div className="calendar">

        <Header days={days} numberOfCols={numberOfCols} />

        <DayView days={days} numberOfCols={numberOfCols} weekEvents={weekEvents} initDate={initDate} />

        <TimeView days={days} numberOfCols={numberOfCols} dayEvents={dayEvents} />

    </div >)
}



