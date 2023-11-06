import React from "react"
import apiFetch from "@/api"
import { Student } from "../_types/student"
import { StudentCard } from "./studentCard"
import { ItemList } from "@/app/_components/list/itemList"

export function StudentList() {
    const students = apiFetch('/student') as Array<Student>
    return (<ItemList items={students.map((item) => ({ key: item.id, children: (<StudentCard item={item} />) }))} />)
}