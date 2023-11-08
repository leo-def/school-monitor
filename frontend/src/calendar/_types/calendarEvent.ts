export interface CalendarEvent {
  id: string;
  title: string;
  desc?: string;
  start: Date;
  end: Date;
  color: string;
  backgroundColor: string;
}
