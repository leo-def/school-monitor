import React from "react"
import { format } from "date-fns"
import { Card, CardContent, Typography, Chip, Grid } from "@mui/material"
import { Event } from "../_types/event"

export function EventCard({ item }: { item: Event }) {
    const startDateStr = item.start ? format(item.start, 'dd/MM/yyyy') : '';
    const startTimeStr = item.end ? format(item.end, 'HH:mm') : '';
    const endTimeStr = item.end ? format(item.end, 'HH:mm') : '';
    return (<Card sx={{ maxWidth: 345, minHeight: 150 }}>
        <CardContent>
            <Grid container rowSpacing={0.5}>
                <Grid container item xs={12} justifyContent="space-between">
                    <Grid item xs="auto">
                        <Typography sx={{ fontSize: 14, fontWeight: 600 }} color="text.secondary">
                            {item.title}
                        </Typography>
                    </Grid>
                    {item.recess ? <Grid item xs={4}>
                        <Chip label="Recesso" color="primary" size="small" />
                    </Grid> : undefined}
                </Grid>
                <Grid item xs={12}>
                    <hr />
                </Grid>
                <Grid item xs={12}>
                    <Typography sx={{ fontSize: 12 }} color="text.secondary">
                        {startDateStr}
                        <Typography sx={{ fontSize: 10 }} component="span">
                            {item.fullDay ? '' : ` das ${startTimeStr} até ${endTimeStr}`}
                        </Typography>
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="body2" sx={{ fontSize: 10 }}>
                        {item.desc}
                    </Typography>
                </Grid>
            </Grid>
        </CardContent>
    </Card>)
}