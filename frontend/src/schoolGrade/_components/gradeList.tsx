import React from "react"
import apiFetch from "@/commons/api"
import { GradeDetails } from "./gradeDetails"
import { SchoolGradeDto } from "../_types/schoolGrade.dto"
import { ItemList } from "@/commons/_components/list/itemList"

export function GradeList() {
    const grades = apiFetch('/grade') as Array<SchoolGradeDto>
    return (<ItemList items={grades.map((item) => ({ key: item.id, children: (<GradeDetails item={item} />) }))} />)
}
