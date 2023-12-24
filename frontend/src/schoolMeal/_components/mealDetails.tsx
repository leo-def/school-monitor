import React from "react"
import { Grid, Paper, Typography } from "@mui/material"

export function MealDetails({ item }: { item?: SchoolMealDto }) {
    return (
        <Paper elevation={3} sx={{ fontSize: 12, minWidth: 150, maxWidth: 350, width: '100%', padding: 1, margin: 0 }}>
            {item ? <MealCardContet item={item} /> : "Refeição não informada"}
        </Paper>)
}

function MealCardContet({ item }: { item: SchoolMealDto }) {

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