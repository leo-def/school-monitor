'use client'

import { createContext } from "react";
import { CalendarEvent } from "../_types/calendarEvent";

export interface CalendarEventsContextValue {
    events: Array<CalendarEvent>;
    handleCreateNewEvent?: (
        origin: React.UIEvent,
        calendarEvent: Partial<CalendarEvent>
    ) => void;
    handleOpenEvent?: (
        origin: React.UIEvent,
        calendarEvent: CalendarEvent
    ) => void;
}

export const initialCalendarEventsContextValue = {
    events: []
} as CalendarEventsContextValue;

export const CalendarEventsContext = createContext<CalendarEventsContextValue>(initialCalendarEventsContextValue);
