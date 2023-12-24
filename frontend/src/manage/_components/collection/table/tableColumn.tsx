import React from "react";
import { TableField } from "../../../_types/config/collection/table/tableField";
import { TableCell } from "@mui/material";

export interface TableColumnProps<T> {
    readonly column: TableField<T>
    readonly item: any
}
export function TableColumn<T>({ item, column }: TableColumnProps<T>) {
    const { Display } = column

    return (<TableCell>{Display ? <Display item={item} column={column} /> : undefined}</TableCell>)
}
