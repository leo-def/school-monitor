import React from "react"
import apiFetch from "@/api"
import { Notification } from "../_types/notification"
import { NotificationCard } from "./notificationCard"
import { ItemList } from "@/app/_components/list/itemList"

export function NotificationList() {
    const notifications = apiFetch('/notification') as Array<Notification>
    return (<ItemList items={notifications.map((item) => ({ key: item.id, children: (<NotificationCard item={item} />) }))} />)
}