import React from "react"
import { Card, CardContent, Typography, Slider } from "@mui/material"
import { Grade } from "../_types/grade"

export function GradeCard({ item }: { item: Grade }) {
    function valuetext(value: number) {
        return `Nota: ${value} / ${item.max}`;
    }
    const marks = [
        {
            value: item.passingScore,
            label: `Média: ${item.passingScore}`,
        },
    ];
    return (
        <Card sx={{ maxWidth: 500, minWidth: 200 }}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {item.title} - Nota: {`${item.value} / ${item.max}`}
                </Typography>
                <Slider
                    aria-label="Grade"
                    getAriaValueText={valuetext}
                    step={10}
                    valueLabelDisplay="auto"
                    marks={marks}
                    value={item.value}
                    max={item.max}
                    min={item.min}
                    color={item.value >= item.passingScore ? "success" : "error"}
                />
                <Typography variant="body2">
                    {item.desc}
                </Typography>
            </CardContent>
        </Card>)
}
