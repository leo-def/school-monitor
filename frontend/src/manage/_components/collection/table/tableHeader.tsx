import React from "react";
import { TableCell, TableHead, TableRow } from "@mui/material";
import { useGetManageContextValue } from "@/manage/_hooks/useGetManageContextValue";
import { DefaultActionsHeaderColumnDisplay } from "./defaultActionsHeaderColumnDisplay";
import { TableHeaderColumn } from "./tableHeaderColumn";

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

