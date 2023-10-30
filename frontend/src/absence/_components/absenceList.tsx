import apiFetch from "@/api"
import { Grid, Card, CardContent, Typography, CardActions, Button, CardMedia } from "@mui/material"
import Link from "next/link"
import React from "react"
import { Absence } from "../_types/absence"
import { AbsenceCard } from "./absenceCard"

export function AbsenceList() {
    const absences = apiFetch('/absences') as Array<Absence>
    return (<React.Fragment>
        <Grid container spacing={2} justifyContent="center" alignItems="center">
            {absences.map((item) => (<Grid item key={item.id}>
                <AbsenceCard item={item}/>
            </Grid>))}
        </Grid>
    </React.Fragment>)
}