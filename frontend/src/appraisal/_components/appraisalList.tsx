import React from "react"
import apiFetch from "@/api"
import { Appraisal } from "../_types/appraisal"
import { AppraisalCard } from "./appraisalCard"
import { ItemList } from "@/app/_components/list/itemList"

export function AppraisalList() {
    const appraisals = apiFetch('/appraisal') as Array<Appraisal>
    return (<ItemList items={appraisals.map((item) => ({ key: item.id, children: (<AppraisalCard item={item} />) }))} />)
}