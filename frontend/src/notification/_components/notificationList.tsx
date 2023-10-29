import React from "react"
import apiFetch from "@/api"
import { Grid } from "@mui/material"
import { Notification } from "../_types/notification"
import { NotificationCard } from "./notificationCard"

export function NotificationList() {
    const notifications = apiFetch('/notification') as Array<Notification>
    return (<React.Fragment>
        <Grid container spacing={2} justifyContent="center" alignItems="center">
            {notifications.map((item) => (<Grid item key={item.id}>
                <NotificationCard item={item} />
            </Grid>))}
        </Grid>
    </React.Fragment>)
}