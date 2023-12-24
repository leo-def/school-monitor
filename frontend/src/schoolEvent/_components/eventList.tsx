import React from "react"
import apiFetch from "@/commons/api"
import { Event } from "../_types/event"
import { EventCard } from "./eventCard"
import { ItemList } from "@/app/_components/list/itemList"

export function EventList() {
    const events = apiFetch('/event') as Array<Event>
    return (<ItemList items={events.map((item) => ({ key: item.id, children: (<EventCard item={item} />) }))} />)
}