
import React from "react"
import apiFetch from "@/commons/api"
import { Subject } from "../_types/subject"
import { SubjectCard } from "./subjectCard"
import { ItemList } from "@/app/_components/list/itemList"

export function SubjectList() {
    const subjects = apiFetch('/subject') as Array<Subject>
    return (<ItemList items={subjects.map((item) => ({ key: item.id, children: (<SubjectCard item={item} />) }))} />)
}