import React from "react"
import { Card, CardContent, Typography } from "@mui/material"
import { Meal } from "../_types/meal"

export function MealCard({ item }: { item: Meal }) {
    const mealWeekDaysLabels = {
        MONDAY: "segunda feira",
        TUESDAY: "terça feira",
        WEDNESDAY: "quarta feira",
        THURSDAY: "quinta feira",
        FRIDAY: "sexta feira",
    } as { [x: string]: string };
    const mealTypeLabels = {
        BREAKFAST: "Café da manhã",
        LUNCH: "Almoço",
        DINNER: "Jantar"
    } as { [x: string]: string };
    return (<Card sx={{ maxWidth: 345 }}>
        <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                {item.title}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {`${mealWeekDaysLabels[item.weekDays] ?? ''} / ${mealTypeLabels[item.type] ?? ''}`}
            </Typography>
            <Typography variant="body2">
                {item.desc}
            </Typography>
        </CardContent>
    </Card>)
}
