import React from "react"
import apiFetch from "@/api"
import { Grid } from "@mui/material"
import { Meal } from "../_types/meal"
import { MealCard } from "./mealCard"

export function MealList() {
    const meals = apiFetch('/meal') as Array<Meal>
    return (<React.Fragment>
        <Grid container spacing={2} justifyContent="center" alignItems="center">
            {meals.map((item) => (<Grid item key={item.id}>
                <MealCard item={item} />
            </Grid>))}
        </Grid>
    </React.Fragment>)
}
