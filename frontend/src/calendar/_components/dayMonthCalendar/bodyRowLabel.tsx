import React, { useMemo } from "react";
import { addDays, getDay } from "date-fns";

export interface BodyRowLabelProps {
    readonly weekDays: Array<{ index: number, date: Date, day: number, title: string }>,
    readonly initDate: Date,
    readonly row: number
}
export function BodyRowLabel({ weekDays, row, initDate }: BodyRowLabelProps) {
    const weekDaysLength = weekDays.length
    return (<div className="calendar-body-row-label" style={{
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        display: 'flex'
    }}>
        {weekDays.map(weekDay =>
            <div
                key={weekDay.index}
                className="calendar-body-row-label-column"
                style={{
                    fontSize: '14px',
                    lineHeight: '30px',
                    color: '#70757a',
                    textAlign: 'center',
                    flex: '1 1 0%',
                }}>
                <BodyColumnLabel
                    weekDay={weekDay}
                    initDate={initDate}
                    row={row}
                    weekDaysLength={weekDaysLength}
                />
            </div>)}
    </div>)
}
export interface BodyColumnLabelProps {
    readonly weekDay: { index: number, date: Date, day: number, title: string },
    readonly initDate: Date,
    readonly row: number,
    readonly weekDaysLength: number
}
export function BodyColumnLabel({ initDate, weekDaysLength, row, weekDay }: BodyColumnLabelProps) {
    const date = useMemo(() => addDays(initDate, ((weekDaysLength * row) + weekDay.index)), [initDate, weekDaysLength, row, weekDay])
    const day = useMemo(() => date.getDate(), [date])
    return (
        <h2 className="calendar-body-row-label-title" style={{
            marginTop: '8px',
            fontFamily: 'Roboto,Arial,sans-serif',
            fontSize: '12px',
            fontWeight: 500,
            letterSpacing: '.3px',
            display: 'inline-block',
            textAlign: 'center',
            whiteSpace: 'nowrap',
            width: 'max-content',
            minWidth: '24px',
            color: '#70757a',
            lineHeight: '16px',
            pointerEvents: 'auto'
        }}>{day}</h2>)
}