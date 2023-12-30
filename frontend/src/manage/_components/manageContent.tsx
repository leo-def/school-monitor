import { Modal } from "@mui/material"
import React from "react"
import { ActionEnum } from "../_enums/action.enum"
import { useGetManageContextValue } from "../_hooks/useGetManageContextValue"
import { Collection } from "./collection/collection"
import { FormCard } from "./form/formCard"



export function ManageContent() {
    const {
        state: { action, selected }
    } = useGetManageContextValue<any>()
    const showCollection = (action === ActionEnum.COLLECTION)
    const showForm = (action === ActionEnum.EDIT || action === ActionEnum.CREATE || action === ActionEnum.SHOW)
    return (<React.Fragment>
        {showCollection ? <Collection /> : undefined}
        {<Modal open={showForm}><FormCard values={selected} /></Modal>}
    </React.Fragment>)
}