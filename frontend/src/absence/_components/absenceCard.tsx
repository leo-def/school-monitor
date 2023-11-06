
import React from "react"
import { Card, CardContent, Typography } from "@mui/material"
import { Absence } from "../_types/absence"
import { format } from "date-fns";

export function AbsenceCard({ item }: { item: Absence }) {

    const startDateStr = item.start ? format(item.start, 'dd/MM/yyyy') : '';
    const startTimeStr = item.end ? format(item.end, 'HH:mm') : '';
    const endTimeStr = item.end ? format(item.end, 'HH:mm') : '';
    return (<Card sx={{ maxWidth: 345 }}>
        <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                {item.desc}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                ${startDateStr} {item.fullDay ? '' : ` das ${startTimeStr} até ${endTimeStr}`}
            </Typography>
        </CardContent>
    </Card>)
}