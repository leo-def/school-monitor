import React from "react"
import { TableRow as MuiTableRow, TableCell } from "@mui/material"
import { useGetManageContextValue } from "../../../_hooks/useGetManageContextValue"
import { TableColumn } from "./tableColumn"

export interface TableRowProps {
    readonly item: any
}
export function TableRow({ item }: TableRowProps) {
    const {
        config: {
            collection: { table: { columns, ActionsColumnDisplay } }
        }
    } = useGetManageContextValue<any>()
    return (<MuiTableRow>
        {columns.map((column) => <TableColumn key={JSON.stringify(column)} column={column} item={item} />)}
        <TableCell>{ActionsColumnDisplay ? <ActionsColumnDisplay item={item} /> : undefined}</TableCell>
    </MuiTableRow>)
}