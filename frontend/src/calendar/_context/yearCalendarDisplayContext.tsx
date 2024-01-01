"use client";

import { createContext } from "react";

export interface YearCalendarDisplayContextValue {
}

export const initialYearCalendarDisplayContextValue = {
} as YearCalendarDisplayContextValue;

export const YearCalendarDisplayContext = createContext<YearCalendarDisplayContextValue>(initialYearCalendarDisplayContextValue);
