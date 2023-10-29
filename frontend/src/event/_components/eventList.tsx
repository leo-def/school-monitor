import React from "react"
import apiFetch from "@/api"
import { Grid } from "@mui/material"
import { Event } from "../_types/event"
import { EventCard } from "./eventCard"

export function EventList() {
    const events = apiFetch('/event') as Array<Event>
    return (<React.Fragment>
        <Grid container spacing={2} justifyContent="center" alignItems="center">
            {events.map((item) => (<Grid item key={item.id}>
                <EventCard item={item} />
            </Grid>))}
        </Grid>
    </React.Fragment>)
}