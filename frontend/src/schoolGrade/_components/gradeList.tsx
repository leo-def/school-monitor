import React from "react";
import apiFetch from "@/commons/api";
import { ItemList } from "@/commons/_components/list/itemList";
import { SchoolGradeDto } from "../_types/schoolGrade.dto";
import { GradeDetails } from "./gradeDetails";

export function GradeList() {
    const grades = apiFetch('/grade') as Array<SchoolGradeDto>
    return (<ItemList items={grades.map((item) => ({ key: item.id, children: (<GradeDetails item={item} />) }))} />)
}
