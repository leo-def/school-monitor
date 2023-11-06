import React, { PropsWithChildren } from "react"
import { Grid } from "@mui/material"
import { ListHeader } from "@/app/_components/list/listHeader"

export function ItemList({ items }: { items: Array<{ key: string } & PropsWithChildren> }) {
    return (<Grid container rowSpacing={2}>
        <Grid item xs={12}><ListHeader /></Grid>
        <Grid container item spacing={1} rowSpacing={2} >
            {items.map((item) => (<Grid item key={item.key}>{item.children}</Grid>))}
        </Grid>
    </Grid>)
}
