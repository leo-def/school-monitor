import React from "react";
import { ColumnDisplayProps } from "@/manage/_types/props/columnDisplayProps";

export function DefaultColumnDisplay<T>({ column, item }: ColumnDisplayProps<T>) {
    return (<React.Fragment>{item ? (item as any)[column.field] : undefined}</React.Fragment>)
}