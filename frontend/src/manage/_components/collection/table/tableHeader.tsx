import React from "react"
import { useGetManageContextValue } from "../../../_hooks/useGetManageContextValue"
import { TableHeaderColumn } from "./tableHeaderColumn"
import { TableHead, TableRow } from "@mui/material"

export function TableHeader() {
    const {
        config: {
            collection: { table: { columns } }
        }
    } = useGetManageContextValue<any>()
    return (<TableHead>
        <TableRow>{
            columns.map((column) => <TableHeaderColumn key={JSON.stringify(column)} column={column} />)
        }</TableRow>
    </TableHead>)
}
