import React from "react"
import apiFetch from "@/api"
import { Grid, Card, CardContent, Typography } from "@mui/material"
import { Grade } from "../_types/grade"
import { GradeCard } from "./gradeCard"

export function GradeList() {
    const grades = apiFetch('/grade') as Array<Grade>
    return (<React.Fragment>
        <Grid container spacing={2} justifyContent="center" alignItems="center">
            {grades.map((item) => (<Grid item key={item.id}>
                <GradeCard item={item} />
            </Grid>))}
        </Grid>
    </React.Fragment>)
}
