import React from "react";
import apiFetch from "@/commons/api";
import { ItemList } from "@/commons/_components/list/itemList";
import { SchoolClassCard } from "./schoolClassCard";
import { SchoolClassDto } from "../_types/schoolClass.dto";

export function SchoolClassList() {
    const schoolClasses = apiFetch('/schoolClass') as Array<SchoolClassDto>
    return (<ItemList items={schoolClasses.map((item) => ({ key: item.id, children: (<SchoolClassCard item={item} />) }))} />)
}