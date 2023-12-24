import React from "react"
import { useGetManageContextValue } from "../../../_hooks/useGetManageContextValue"
import { TableColumn } from "./tableColumn"

export interface TableRowProps {
    readonly item: any
}
export function TableRow({ item }: TableRowProps) {
    const {
        config: {
            collection: { table: { columns } }
        }
    } = useGetManageContextValue<any>()
    return (<React.Fragment>{columns.map((column) => <TableColumn key={JSON.stringify(column)} column={column} item={item} />)}</React.Fragment>)
}