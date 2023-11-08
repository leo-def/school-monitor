import React from "react";
import { useGetMonthCalendarDisplay } from "@/calendar/_hooks/useGetMonthCalendarDisplay";
import { BodyRow } from "./bodyRow";

export function Body() {
    const { rows } = useGetMonthCalendarDisplay()
    return (<div
        className="calendar-body"
        style={{
            margin: 0,
            overflow: 'hidden',
            flex: '1 1 0%',
            display: 'flex',
            flexDirection: 'column',
        }}>
        {rows.map(row => <BodyRow key={row} row={row} />)}
    </div>)
}