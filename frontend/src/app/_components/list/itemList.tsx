import React, { PropsWithChildren } from "react"
import { Grid } from "@mui/material"
import { ListHeader } from "@/app/_components/list/listHeader"
export interface ItemListProps {
    readonly items: Array<{ key: string } & PropsWithChildren>
}

export function ItemList({ items }: ItemListProps) {
    return (<Grid container rowSpacing={2} marginLeft={2}>
        <Grid item xs={12} >
            <ListHeader />
        </Grid>
        <Grid container item xs={12} spacing={1} rowSpacing={2} >
            {items.map((item) => (<Grid item key={item.key}>{item.children}</Grid>))}
        </Grid>
    </Grid>)
}
