import React from "react"
import { useGetManageContextValue } from "../../../_hooks/useGetManageContextValue"
import { TableHeaderColumn } from "./tableHeaderColumn"
import { TableCell, TableHead, TableRow } from "@mui/material"

export function TableHeader() {
    const {
        config: {
            collection: { table: { columns, ActionsHeaderColumnDisplay } }
        }
    } = useGetManageContextValue<any>()
    return (<TableHead>
        <TableRow>{
            columns.map((column) => <TableHeaderColumn key={JSON.stringify(column)} column={column} />)
        }
            <TableCell>{ActionsHeaderColumnDisplay ? <ActionsHeaderColumnDisplay /> : undefined}</TableCell>
        </TableRow>
    </TableHead>)
}

