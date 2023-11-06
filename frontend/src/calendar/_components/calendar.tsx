'use client'

import { CalendarViewTypeEnum } from "../_enums/calendarViewType.enum";
import { CalendarDataState } from "../_types/caledarDataContext";
import { CalendarDataContextProvider } from "./calendarDataContextProvider";
import { DayMonthCalendar } from "./dayMonthCalendar";
import { HourDayCalendar } from "./hourDayCalendar";
import { MonthYearCalendar } from "./monthYearCalendar/monthYearCalendar";

export type CalendarProps = Partial<CalendarDataState>;

export function Calendar(props: CalendarProps) {
    return (<CalendarDataContextProvider defaulValues={props}> <CalendarBody viewType={props.viewType ?? CalendarViewTypeEnum.HOUR_DAY} /></CalendarDataContextProvider>)
}

export function CalendarBody({ viewType }: { viewType: CalendarViewTypeEnum }) {
    switch (viewType) {
        case CalendarViewTypeEnum.DAY_MONTH:
            return (<DayMonthCalendar />)
        case CalendarViewTypeEnum.HOUR_DAY:
            return (<HourDayCalendar />);
        case CalendarViewTypeEnum.MONTH_YEAR:
            return (<MonthYearCalendar />);

            break;
        default:
            break;
    }
}