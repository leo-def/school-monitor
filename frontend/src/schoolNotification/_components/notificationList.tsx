import React from "react"
import apiFetch from "@/commons/api"
import { NotificationCard } from "./notificationCard"
import { ItemList } from "@/commons/_components/list/itemList"

export function NotificationList() {
    const notifications = apiFetch('/notification') as Array<SchoolNotificationDto>
    return (<ItemList items={notifications.map((item) => ({ key: item.id, children: (<NotificationCard item={item} />) }))} />)
}