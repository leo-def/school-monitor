import React from "react"
import { Grid, Paper, Typography } from "@mui/material"
import { Meal } from "../_types/meal"

export function MealDetails({ item }: { item?: Meal }) {
    return (
        <Paper elevation={3} sx={{ minWidth: 200, padding: 1 }}>
            {item ? <MealCardContet item={item} /> : "Refeição não informada"}
        </Paper>)
}

function MealCardContet({ item }: { item: Meal }) {

    return (<React.Fragment>
        <Grid container rowSpacing={0.5}>
            <Grid item xs={12}>
                <Typography sx={{ fontSize: 12 }} color="text.secondary">
                    {item.title}
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="body2" sx={{ fontSize: 10 }}>
                    {item.desc}
                </Typography>
            </Grid>
        </Grid>
    </React.Fragment>)
}