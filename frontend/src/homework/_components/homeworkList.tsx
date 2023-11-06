import React from "react"
import apiFetch from "@/api"
import { Homework } from "../_types/homework"
import { HomeworkCard } from "./homeworkCard"
import { ItemList } from "@/app/_components/list/itemList"

export function HomeworkList() {
    const homeworks = apiFetch('/homework') as Array<Homework>
    return (<ItemList items={homeworks.map((item) => ({ key: item.id, children: (<HomeworkCard item={item} />) }))} />)
}