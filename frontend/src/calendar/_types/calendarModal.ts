import { CalendarEvent } from "./calendarEvent";

export interface CalendarModal {
  id: string;
  top: number;
  left: number;
  events: Array<CalendarEvent>;
}
