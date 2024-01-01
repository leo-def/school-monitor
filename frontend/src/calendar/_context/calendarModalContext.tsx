"use client";

import { Dispatch, createContext } from "react";
import { CalendarModal } from "../_types/calendarModal";
import { CalendarModalAction } from "../_types/calendarModalAction";

export interface CalendarModalStateValue {
  modals: Array<CalendarModal>
}
export const initialCalendarModalStateValue = {
  modals: new Array<CalendarModal>()
};

export interface CalendarModalContextValue {
  state: CalendarModalStateValue;
  dispatch: Dispatch<CalendarModalAction>;
}

export const CalendarModalContext = createContext<CalendarModalContextValue>({
  state: initialCalendarModalStateValue
} as CalendarModalContextValue);

