import React from "react"
import apiFetch from "@/api"
import { Grid } from "@mui/material"
import { SchoolClass } from "../_types/schoolClass"
import { SchoolClassCard } from "./schoolClassCard"

export function SchoolClassList() {
    const schoolClasses = apiFetch('/schoolClass') as Array<SchoolClass>
    return (<React.Fragment>
        <Grid container spacing={2} justifyContent="center" alignItems="center">
            {schoolClasses.map((item) => (<Grid item key={item.id}>
                <SchoolClassCard item={item} />
            </Grid>))}
        </Grid>
    </React.Fragment>)
}