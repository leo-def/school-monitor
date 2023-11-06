import React from "react"
import apiFetch from "@/api"
import { Teacher } from "../_types/teacher"
import { TeacherCard } from "./teacherCard"
import { ItemList } from "@/app/_components/list/itemList"

export function TeacherList() {
    const teachers = apiFetch('/teacher') as Array<Teacher>
    return (<ItemList items={teachers.map((item) => ({ key: item.id, children: (<TeacherCard item={item} />) }))} />)
}