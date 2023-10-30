import React from "react"
import { format } from "date-fns"
import { Card, CardContent, Typography, Chip } from "@mui/material"
import { Event } from "../_types/event"

export function EventCard({ item }: { item: Event }) {
    const endDateStr = item.end ? format(item.end, 'dd//MM/yyyy') : '';
    const startDateStr = item.start ? format(item.start, 'dd//MM/yyyy') : '';
    return (<Card sx={{ maxWidth: 345 }}>
        <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                {item.title} {item.recess ? <Chip label="Recesso" color="primary" /> : undefined}
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