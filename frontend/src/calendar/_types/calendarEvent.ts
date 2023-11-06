export interface CalendarEvent {
  id: string;
  title: string;
  desc?: string;
  start: Date;
  end?: Date;
  fullDay?: boolean;
  color: string;
  backgroundColor: string;
}
