import React from "react"
import apiFetch from "@/api"
import { Grid } from "@mui/material"
import { Teacher } from "../_types/teacher"
import { TeacherCard } from "./teacherCard"

export function TeacherList() {
    const teachers = apiFetch('/teacher') as Array<Teacher>
    return (<React.Fragment>
        <Grid container spacing={2} justifyContent="center" alignItems="center">
            {teachers.map((item) => (<Grid item key={item.id}>
                <TeacherCard item={item} />
            </Grid>))}
        </Grid>
    </React.Fragment>)
}