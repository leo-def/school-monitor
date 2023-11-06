import { HourDayCalendar } from "./hourDayCalendar";
export interface FourDaysCalendarProps {
  referenceDate?: Date
}

export function FourDaysCalendar({ referenceDate }: FourDaysCalendarProps) {
  referenceDate = referenceDate ?? new Date();
  return (<HourDayCalendar referenceDate={referenceDate} numberOfDays={4} />);
}
