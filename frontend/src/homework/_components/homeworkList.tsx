import React from "react"
import apiFetch from "@/api"
import { Grid } from "@mui/material"
import { Homework } from "../_types/homework"
import { HomeworkCard } from "./homeworkCard"

export function HomeworkList() {
    const homeworks = apiFetch('/homework') as Array<Homework>
    return (<React.Fragment>
        <Grid container spacing={2} justifyContent="center" alignItems="center">
            {homeworks.map((item) => (<Grid item key={item.id}>
                <HomeworkCard item={item} />
            </Grid>))}
        </Grid>
    </React.Fragment>)
}