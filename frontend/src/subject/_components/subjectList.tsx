
import React from "react"
import apiFetch from "@/api"
import { Grid } from "@mui/material"
import { Subject } from "../_types/subject"
import { SubjectCard } from "./subjectCard"

export function SubjectList() {
    const subjects = apiFetch('/subject') as Array<Subject>
    return (<React.Fragment>
        <Grid container spacing={2} justifyContent="center" alignItems="center">
            {subjects.map((item) => (<Grid item key={item.id}>
                <SubjectCard item={item} />
            </Grid>))}
        </Grid>
    </React.Fragment>)
}