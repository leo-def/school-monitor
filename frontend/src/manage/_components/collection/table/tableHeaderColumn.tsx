import React from "react";
import { TableCell } from "@mui/material";
import { TableField } from "@/manage/_types/config/collection/table/tableField";


export interface TableHeaderColumnProps<T> {
    readonly column: TableField<T>
}
export function TableHeaderColumn<T>({ column }: TableHeaderColumnProps<T>) {
    const { Title } = column
    return (<TableCell>{Title ? <Title column={column} /> : undefined}</TableCell>)
}
