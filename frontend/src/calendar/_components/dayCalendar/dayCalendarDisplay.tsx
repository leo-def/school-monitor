import React, { useMemo } from 'react'
import { useGetCalendarDateUtils } from '@/calendar/_hooks/useGetCalendarDateUtils'
import { HeaderDay } from '../../_types/headerDay'
import { useGetCalendarData } from '../../_hooks/useGetCalendarData'
import { DayCalendarDisplayContextProvider } from '../providers/dayCalendarDisplayProvider'
import { Header } from './header'
import { DayView } from './dayView'
import { TimeView } from './timeView'
import '../../_styles/dayCalendar.css'


export function DayCalendarDisplay() {
    const { addDays, isSameDay } = useGetCalendarDateUtils()
    const { currDate, initDate, numberOfDays } = useGetCalendarData()

    const numberOfCols = useMemo(() => (numberOfDays + 2), [numberOfDays])
    const days = useMemo(() => Array(numberOfDays).fill(0).map((_, index) => {
        const date = addDays(initDate, index)
        const isToday = isSameDay(currDate, date)
        return { date, isToday, index } as HeaderDay
    }), [numberOfDays, addDays, initDate, isSameDay, currDate])
    const defaultValues = {
        numberOfCols,
        days
    }
    return (<DayCalendarDisplayContextProvider defaultValues={defaultValues}>
        <div className="calendar">
            <Header />
            <DayView />
            <TimeView />
        </div>
    </DayCalendarDisplayContextProvider>)
}



