import React from "react"
import apiFetch from "@/commons/api"
import { Absence } from "../_types/absence"
import { AbsenceCard } from "./absenceCard"
import { ItemList } from "@/app/_components/list/itemList"

export function AbsenceList() {
    const absences = apiFetch('/absence') as Array<Absence>
    return (<ItemList items={absences.map((item) => ({ key: item.id, children: (<AbsenceCard item={item} />) }))} />)
}