import React from "react";
import apiFetch from "@/commons/api";
import { ItemList } from "@/commons/_components/list/itemList";
import { EventCard } from "./eventCard";

export function EventList() {
    const events = apiFetch('/event') as Array<any>
    return (<ItemList items={events.map((item) => ({ key: item.id, children: (<EventCard item={item} />) }))} />)
}