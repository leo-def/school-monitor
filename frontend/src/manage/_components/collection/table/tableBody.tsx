import React from "react";
import { TableBody as MuiTableBody } from "@mui/material"
import { TableRow } from "./tableRow";
import { useGetManageContextValue } from "../../../_hooks/useGetManageContextValue";

export function TableBody() {
    const {
        state: { fetchResult: { items } }
    } = useGetManageContextValue<any>()
    return (<MuiTableBody>
        {items.map(item => <TableRow key={JSON.stringify(item)} item={item} />)}
    </MuiTableBody>)
}