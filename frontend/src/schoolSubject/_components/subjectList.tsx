
import React from "react";
import apiFetch from "@/commons/api";
import { ItemList } from "@/commons/_components/list/itemList";
import { SubjectCard } from "./subjectCard";

export function SubjectList() {
    const subjects = apiFetch('/subject') as Array<any>
    return (<ItemList items={subjects.map((item) => ({ key: item.id, children: (<SubjectCard item={item} />) }))} />)
}