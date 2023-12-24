import React, { useMemo, useCallback } from "react"
import { ActionEnum } from "../../_enums/action.enum"
import { useGetManageContextValue } from "../../_hooks/useGetManageContextValue"
import { useSetManageAction } from "@/manage/_hooks/useSetManageAction"
import { FormConfig } from "@/manage/_types/config/form/formConfig"
import { FormDisplayProps } from "@/manage/_types/props/formDisplayProps"

export function FormCard() {
    const {
        state: {
            action,
            selected
        },
        config
    } = useGetManageContextValue<any>()

    const defaultForm = config.form as any
    const form = useMemo(() => (action === ActionEnum.EDIT ? defaultForm?.update : defaultForm?.create) ?? defaultForm as FormConfig<any>, [action, defaultForm])
    const values = useMemo(() => form?.map ? form?.map(selected) : selected, [form, selected])
    const setAction = useSetManageAction()

    const disabled = action === ActionEnum.SHOW || form?.disabled || config.disabled
    const onSubmit = useCallback((values: any) =>
        (form?.submit
            ? form?.submit(values)
            : Promise.resolve(null)
        ).then(() => setAction(form?.actionOnSubmit ?? ActionEnum.COLLECTION))
        , [form, setAction])

    const displayWithProps = form?.display ? React.Children.map(form?.display, child => {
        if (React.isValidElement(child)) {
            return React.cloneElement(child, { values, disabled: disabled, onSubmit, id: form?.id } as FormDisplayProps<any>);
        }
        return child;
    }) : undefined;
    return (<React.Fragment>{displayWithProps}</React.Fragment>)
}



