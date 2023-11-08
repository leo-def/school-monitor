import React, { useMemo } from "react";
import { BodyColumnLabel } from "./bodyColumnLabel";
import { useGetMonthCalendarDisplay } from "@/calendar/_hooks/useGetMonthCalendarDisplay";

export interface BodyRowLabelProps {
    readonly row: number
}
export function BodyRowLabel({ row }: BodyRowLabelProps) {

    const { weekDays } = useGetMonthCalendarDisplay()
    const weekDaysLength = useMemo(() => weekDays.length, [weekDays])
    return (<div className="calendar-body-row-label" style={{
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        display: 'flex'
    }}>
        {weekDays.map(weekDay => <BodyColumnLabel key={weekDay.index} weekDay={weekDay} row={row} weekDaysLength={weekDaysLength} />)}
    </div >)
}