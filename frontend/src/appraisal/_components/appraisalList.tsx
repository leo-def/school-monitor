import apiFetch from "@/api"
import { Grid } from "@mui/material"
import React from "react"
import { Appraisal } from "../_types/appraisal"
import { AppraisalCard } from "./appraisalCard"

export function AppraisalList() {
    const appraisals = apiFetch('/appraisal') as Array<Appraisal>
    return (<React.Fragment>
        <Grid container spacing={2} justifyContent="center" alignItems="center">
            {appraisals.map((item) => (<Grid item key={item.id}>
                <AppraisalCard item={item} />
            </Grid>))}
        </Grid>
    </React.Fragment>)
}