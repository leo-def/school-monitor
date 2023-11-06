import React from "react"
import apiFetch from "@/api"
import { Grade } from "../_types/grade"
import { GradeDetails } from "./gradeDetails"
import { ItemList } from "@/app/_components/list/itemList"

export function GradeList() {
    const grades = apiFetch('/grade') as Array<Grade>
    return (<ItemList items={grades.map((item) => ({ key: item.id, children: (<GradeDetails item={item} />) }))} />)
}
