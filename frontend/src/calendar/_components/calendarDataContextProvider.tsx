'use client'

import { PropsWithChildren, useReducer, useMemo } from "react";
import { CalendarDataContext } from "../_context/calendarDataCotext";
import { calendarDataReducer } from "../_reducers/calendarDataReducer";
import { CalendarDataState, initialCalendarDataState } from "../_types/caledarDataContext";

export type CalendarDataContextProviderProps = { defaulValues: Partial<CalendarDataState> } & PropsWithChildren;

export const CalendarDataContextProvider = ({ children, defaulValues }: CalendarDataContextProviderProps) => {
    const initialState = {
        ...initialCalendarDataState,
        ...defaulValues
    } as CalendarDataState
    const [state, dispatch] = useReducer(calendarDataReducer, initialState);
    const value = useMemo(() => ({ state, dispatch }), [state, dispatch])
    return (
        <CalendarDataContext.Provider value={value}>
            {children}
        </CalendarDataContext.Provider>
    );
};