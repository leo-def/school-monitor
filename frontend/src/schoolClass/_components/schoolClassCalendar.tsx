import React, { useCallback, useMemo, useState } from "react";
import { Grid } from "@mui/material";
import { Calendar, CalendarProps } from "@/calendar/_components/calendar";
import { CalendarDateFnsUtilsProvider } from "@/calendar/_components/providers/calendarDateFnsUtilsProvider";
import { CalendarEventsContextProvider } from "@/calendar/_components/providers/calendarEventsContextProvider";
import { CalendarEvent } from "@/calendar/_types/calendarEvent";
import { getMockEvents } from "@/calendar/_mocks/getMockEvents";
import { CalendarTypeProps, CalendarTypeSelect } from "./calendarTypeSelect";

export function SchoolClassCalendar() {
    const [initialDate, setInitialDate] = useState(null as null | Date)
    const [endDate, setEndDate] = useState(null as null | Date)
    const [calendarProps, setCalendarProps] = useState(null as null | CalendarProps)

    const handleLoadInitialDate = useCallback((date: Date) => {
        setInitialDate(date)
    }, [setInitialDate])
    const handleLoadEndDate = useCallback((date: Date) => {
        setEndDate(date)
    }, [setEndDate])

    const handleChange = useCallback((value: CalendarTypeProps) => {
        const props = ({
            viewType: value.viewType,
            numberOfDays: value.numberOfDays,
            handleLoadEndDate,
            handleLoadInitialDate
        }) as CalendarProps
        setCalendarProps(props)
    }, [handleLoadEndDate, handleLoadInitialDate])

    const events: Array<CalendarEvent> = useMemo(() => {
        return (initialDate && endDate)
            ? getMockEvents(initialDate, endDate)
            : []
    }, [
        initialDate,
        endDate
    ])
    const handleCreateNewEvent = useCallback((origin: React.UIEvent, calendarEvent: Partial<CalendarEvent>) => {
        console.log('handleCreateNewEvent', origin, calendarEvent)
    }, [])
    const handleOpenEvent = useCallback((origin: React.UIEvent, calendarEvent: CalendarEvent) => {
        console.log('handleOpenEvent', origin, calendarEvent)
    }, [])
    const eventProps = useMemo(() => ({ events, handleCreateNewEvent, handleOpenEvent }), [events, handleCreateNewEvent, handleOpenEvent])

    return (<React.Fragment>
        <Grid container>
            <Grid item xs={4} padding={4}>
                <CalendarTypeSelect onChange={handleChange} />
            </Grid>
        </Grid>
        {calendarProps
            ? (<CalendarDateFnsUtilsProvider>
                <CalendarEventsContextProvider defaultValues={eventProps}>
                    <Calendar  {...calendarProps} />
                </CalendarEventsContextProvider>
            </CalendarDateFnsUtilsProvider>)
            : undefined}
    </React.Fragment>)
}