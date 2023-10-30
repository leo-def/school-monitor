import React from "react"
import { format } from "date-fns"
import { Card, CardContent, Typography, Chip } from "@mui/material"
import { Event } from "../_types/event"

export function EventCard({ item }: { item: Event }) {
    const endDateStr = item.end ? format(item.end, 'dd/MM/yyyy') : '';
    const startDateStr = item.start ? format(item.start, 'dd/MM/yyyy') : '';
    return (<Card sx={{ maxWidth: 500, minWidth: 200 }}>
        <CardContent>
        {item.recess ? <Chip label="Recesso" color="primary" /> : undefined}
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                {item.title}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {item.fullDay ? 'Dia inteiro ' : `${startDateStr} - ${endDateStr}`}
            </Typography>
            <Typography variant="body2">
                {item.desc}
            </Typography>
        </CardContent>
    </Card>)
}