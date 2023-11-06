import React from "react"
import { Avatar, Grid, Paper, Typography } from "@mui/material"
import { Teacher } from "../_types/teacher"

export function TeacherDetails({ item }: { item?: Teacher }) {
    return (
        <Paper elevation={3} sx={{ fontSize: 12, minWidth: 200, width: '100%', padding: 1, margin: 0 }}>
            {item ? <TeacherContet item={item} /> : "Refeição não informada"}
        </Paper>)
}

function TeacherContet({ item }: { item: Teacher }) {

    return (<React.Fragment>
        <Grid container rowSpacing={0.5}>
            <Grid container item xs={12}>
                <Grid item xs={8}>
                    <Typography sx={{ fontSize: 12 }} color="text.secondary">
                        Professor # {item.name}
                    </Typography>
                </Grid>
                <Grid item>
                    <Avatar alt={item.name} src={item.img} />
                </Grid>
            </Grid>
        </Grid>
    </React.Fragment>)
}