import React from "react"
import { Card, CardContent, Typography } from "@mui/material"
import { format } from "date-fns"
import { Notification } from "../_types/notification"

export function NotificationCard({ item }: { item: Notification }) {
    return (<Card sx={{ width: 260, minHeight: 150 }}>
        <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                {item.title}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {item.date ? format(item.date, 'dd/MM/yyyy') : ''}
            </Typography>
            <Typography variant="body2" sx={{ fontSize: 10 }}>
                {item.desc}
            </Typography>
        </CardContent>
    </Card>)
}