import React from "react"
import apiFetch from "@/api"
import { SchoolClass } from "../_types/schoolClass"
import { SchoolClassCard } from "./schoolClassCard"
import { ItemList } from "@/app/_components/list/itemList"

export function SchoolClassList() {
    const schoolClasses = apiFetch('/schoolClass') as Array<SchoolClass>
    return (<ItemList items={schoolClasses.map((item) => ({ key: item.id, children: (<SchoolClassCard item={item} />) }))} />)
}