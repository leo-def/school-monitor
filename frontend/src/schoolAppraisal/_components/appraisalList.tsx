import React from "react";
import apiFetch from "@/commons/api";
import { AppraisalCard } from "./appraisalCard";
import { ItemList } from "@/commons/_components/list/itemList";

export function AppraisalList() {
    const appraisals = apiFetch('/appraisal') as Array<any>
    return (<ItemList items={appraisals.map((item) => ({ key: item.id, children: (<AppraisalCard item={item} />) }))} />)
}