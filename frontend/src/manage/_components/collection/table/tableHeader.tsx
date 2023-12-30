import React from "react"
import { useGetManageContextValue } from "../../../_hooks/useGetManageContextValue"
import { TableHeaderColumn } from "./tableHeaderColumn"
import { TableCell, TableHead, TableRow } from "@mui/material"
import { DefaultActionsHeaderColumnDisplay } from "./defaultActionsHeaderColumnDisplay"

export function TableHeader() {
    const {
        config: {
            collection: { table: { columns, ActionsHeaderColumnDisplay } }
        }
    } = useGetManageContextValue<any>()
    const ActionsHeaderDisplay = ActionsHeaderColumnDisplay ?? DefaultActionsHeaderColumnDisplay
    return (<TableHead>
        <TableRow>{
            columns.map((column) => <TableHeaderColumn key={JSON.stringify(column)} column={column} />)
        }
            <TableCell>{ActionsHeaderDisplay ? <ActionsHeaderDisplay /> : undefined}</TableCell>
        </TableRow>
    </TableHead>)
}

