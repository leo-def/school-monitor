import React from "react";
import apiFetch from "@/commons/api";
import { AbsenceCard } from "./absenceCard";
import { ItemList } from "@/commons/_components/list/itemList";

export function AbsenceList() {
    const absences = apiFetch('/absence') as Array<any>
    return (<ItemList items={absences.map((item) => ({ key: item.id, children: (<AbsenceCard item={item} />) }))} />)
}