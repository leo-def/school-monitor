import React from "react"
import { Card, CardContent, Typography, Slider } from "@mui/material"
import { Grade } from "../_types/grade"

export function GradeCard({ item }: { item: Grade }) {
    function valuetext(value: number) {
        return `Nota: ${value}`;
    }
    const marks = [
        {
            value: item.max,
            label: `Min: ${item.min}`,
        },
        {
            value: 100,
            label: `Média: ${item.passingScore}`,
        },
        {
            value: item.max,
            label: `Max: ${item.max}`,
        },
    ];
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {item.title}
                </Typography>
                <Slider
                    aria-label="Grade"
                    getAriaValueText={valuetext}
                    step={10}
                    valueLabelDisplay="auto"
                    marks={marks}
                    value={item.value}
                />
                <Typography variant="body2">
                    {item.desc}
                </Typography>
            </CardContent>
        </Card>)
}
