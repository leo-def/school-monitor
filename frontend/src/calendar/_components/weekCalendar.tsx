import { startOfWeek } from "date-fns"
import { HourDayCalendar } from "./hourDayCalendar"
export interface WeekCalendarProps {
    referenceDate?: Date
}
export function WeekCalendar({ referenceDate }: WeekCalendarProps) {
    referenceDate = referenceDate ?? new Date()
    const initDate = startOfWeek(referenceDate)
    return <HourDayCalendar referenceDate={initDate} numberOfDays={7} />
}
