import React from "react"
import apiFetch from "@/api"
import { Grid } from "@mui/material"
import { Parent } from "../_types/parent"
import { ParentCard } from "./parentCard"

export function ParentList() {
    const parents = apiFetch('/parent') as Array<Parent>
    return (<React.Fragment>
        <Grid container spacing={2} justifyContent="center" alignItems="center">
            {parents.map((item) => (<Grid item key={item.id}>
                <ParentCard item={item} />
            </Grid>))}
        </Grid>
    </React.Fragment>)
}