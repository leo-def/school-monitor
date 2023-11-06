import React from "react"
import apiFetch from "@/api"
import { Grid } from "@mui/material"
import { Parent } from "../_types/parent"
import { ParentCard } from "./parentCard"
import { ListHeader } from "@/app/_components/list/listHeader"

export function ParentList() {
    const parents = apiFetch('/parent') as Array<Parent>
    return (<Grid container rowSpacing={2}>
        <Grid item xs={12}><ListHeader /></Grid>
        <Grid container item spacing={1} rowSpacing={2} >
            {parents.map((item) => (<Grid item key={item.id}>
                <ParentCard item={item} />
            </Grid>))}
        </Grid>
    </Grid>)
}