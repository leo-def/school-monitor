import React from "react"
import apiFetch from "@/api"
import { Manager } from "../_types/manager"
import { ManagerCard } from "./managerCard"
import { ItemList } from "@/app/_components/list/itemList"

export function ManagerList() {
    const managers = apiFetch('/manager') as Array<Manager>
    return (<ItemList items={managers.map((item) => ({ key: item.id, children: (<ManagerCard item={item} />) }))} />)
}