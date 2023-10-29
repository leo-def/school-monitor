import React from "react"
import apiFetch from "@/api"
import { Grid } from "@mui/material"
import { Student } from "../_types/student"
import { StudentCard } from "./studentCard"

export function StudentList() {
    const students = apiFetch('/student') as Array<Student>
    return (<React.Fragment>
        <Grid container spacing={2} justifyContent="center" alignItems="center">
            {students.map((item) => (<Grid item key={item.id}>
                <StudentCard item={item} />
            </Grid>))}
        </Grid>
    </React.Fragment>)
}