import React from "react";
import { BodyRowBackground } from "./bodyRowBackground";
import { BodyRowContent } from "./bodyRowContent";
import { BodyRowLabel } from "./bodyRowLabel";

export interface BodyRowProps {
    readonly row: number,
}
export function BodyRow({ row }: BodyRowProps) {
    return (<div
        className="calendar-body-row"
        style={{
            position: 'relative',
            overflow: 'hidden',
            borderBottom: 'rgb(218,220,224) 1px solid',
            display: 'flex',
            flex: '1 1 0%',
        }}>
        <BodyRowBackground />
        <BodyRowLabel row={row} />
        <BodyRowContent row={row} />
    </div>)
}