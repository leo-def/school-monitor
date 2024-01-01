"use client";

import { CalendarViewTypeEnum } from "../_enums/calendarViewType.enum";
import { MonthCalendar } from "./monthCalendar";
import { DaysCalendar } from "./daysCalendar";
import { YearCalendar } from "./yearCalendar";
import { WeekCalendar } from "./weekCalendar";

export interface CalendarProps {
    readonly viewType?: CalendarViewTypeEnum;
    readonly numberOfDays?: number;
    readonly referenceDate: Date;
    readonly handleLoadEndDate?: (date: Date) => void;
    readonly handleLoadInitialDate?: (date: Date) => void;
}

export function Calendar({
    viewType,
    numberOfDays,
    referenceDate,
    handleLoadEndDate,
    handleLoadInitialDate,
}: CalendarProps) {
    switch (viewType) {
        case CalendarViewTypeEnum.MONTH:
            return (<MonthCalendar
                referenceDate={referenceDate}
                handleLoadEndDate={handleLoadEndDate}
                handleLoadInitialDate={handleLoadInitialDate}
            />)
        case CalendarViewTypeEnum.DAY:
            return (<DaysCalendar
                numberOfDays={numberOfDays}
                referenceDate={referenceDate}
                handleLoadEndDate={handleLoadEndDate}
                handleLoadInitialDate={handleLoadInitialDate}
            />);
        case CalendarViewTypeEnum.YEAR:
            return (<YearCalendar
                referenceDate={referenceDate}
            />);
        case CalendarViewTypeEnum.WEEK:
            return (<WeekCalendar
                referenceDate={referenceDate}
                handleLoadEndDate={handleLoadEndDate}
                handleLoadInitialDate={handleLoadInitialDate}
            />);
        default:
            return undefined;
    }
}