import React from "react"
import { Grid, Card, CardContent, Typography } from "@mui/material"
import { format } from "date-fns"
import { Notification } from "../_types/notification"

export function NotificationCard({ item }: { item: Notification }) {
    return (<Card sx={{ maxWidth: 500, minWidth: 200 }}>
        <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                {item.title}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {item.date ? format(item.date, 'dd/MM/yyyy') : ''}
            </Typography>
            <Typography variant="body2">
                {item.desc}
            </Typography>
        </CardContent>
    </Card>)
}