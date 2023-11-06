import { CalendarEvent } from "./calendarEvent";

export interface CalendarCallbacks {
  handleLoadFinalDate(date: Date): void;
  handleCreateNewEvent(
    origin: Event,
    calendarEvent: Partial<CalendarEvent>
  ): void;
  handleOpenEvent(calendarEvent: CalendarEvent): void;
}
