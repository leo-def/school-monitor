import React from "react";
import { ColumnTitleDisplayProps } from "@/manage/_types/props/columnTitleDisplayProps";

export function DefaultColumnTitleDisplay<T>({ column }: ColumnTitleDisplayProps<T>) {
    return (<React.Fragment>{column.label}</React.Fragment>)
}
