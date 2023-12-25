import React from "react";
import { TableBody as MuiTableBody } from "@mui/material"
import { TableRow } from "./tableRow";
import { useGetManageContextValue } from "../../../_hooks/useGetManageContextValue";

export function TableBody() {
    const {
        state: { fetchResult }
    } = useGetManageContextValue<any>()
    const items = fetchResult?.items ?? []
    return (<MuiTableBody>
        {items.map((item: any) => <TableRow key={JSON.stringify(item)} item={item} />)}
    </MuiTableBody>)
}