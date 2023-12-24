import React from "react";
import { TableField } from "../../../_types/config/collection/table/tableField";
import { TableCell } from "@mui/material";


export interface TableHeaderColumnProps<T> {
    readonly column: TableField<T>
}
export function TableHeaderColumn<T>({ column }: TableHeaderColumnProps<T>) {
    const { Title } = column
    return (<TableCell>{Title ? <Title column={column} /> : undefined}</TableCell>)
}
