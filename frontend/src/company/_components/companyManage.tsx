import React, { useCallback, useMemo } from "react";
import * as yup from "yup";
import { useTranslation } from "react-i18next";
import { Grid, Typography, TextField } from "@mui/material";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Manage } from "@/manage/_components/manage";
import { FetchParams } from "@/manage/_types/status/params/fetchParams";
import { ManageConfig } from "@/manage/_types/config/manageConfig";
import { GridItemDisplayProps } from "@/manage/_types/props/gridItemDisplayProps";
import { FormDisplayProps } from "@/manage/_types/props/formDisplayProps";
import { TableField } from "@/manage/_types/config/collection/table/tableField";
import { TableConfig } from "@/manage/_types/config/collection/table/tableConfig";
import { GridConfig } from "@/manage/_types/config/collection/grid/gridConfig";
import { CollectionConfig } from "@/manage/_types/config/collection/collectionConfig";
import { Actions } from "@/manage/_types/config/actions/actions";
import { FormConfig } from "@/manage/_types/config/form/formConfig";
import { useApiFetch } from "@/commons/api/_hooks/useApiFetch";
import { CompanyDto } from "../_types/company.dto";
import { DefaultColumnDisplay } from "./defaultColumnDisplay";
import { DefaultColumnTitleDisplay } from "./defaultColumnTitleDisplay";

export function CompanyGridItemDisplay({ item }: GridItemDisplayProps<CompanyDto>) {
    return (<Typography sx={{ fontSize: 14, fontWeight: 600 }} color="text.secondary">
        {item.title}
    </Typography>)
}


export interface CompanyFormInputs {
    id?: string
    title: string
}

export function CompanyFormDisplay({
    values,
    disabled,
    onSubmit,
    id,
}: FormDisplayProps<CompanyDto>) {
    const schema = yup.object().shape({
        id: yup.string()
            .optional(),
        title: yup.string()
            .required("Title is required")
    })

    const defaultValues = useMemo(() => ({
        id: values?.id ?? '',
        title: values?.title ?? ''
    } as CompanyFormInputs), [values])

    const { register, handleSubmit } = useForm<CompanyFormInputs>({
        defaultValues,
        resolver: yupResolver<CompanyFormInputs>(schema),
    });
    const onFormSubmit: SubmitHandler<CompanyFormInputs> = async (data: CompanyFormInputs) => onSubmit ? await onSubmit(data as CompanyDto) : undefined;

    return (<form onSubmit={handleSubmit(onFormSubmit)} id={id}>
        <fieldset>
            <input
                type="hidden"
                disabled
                style={{ display: 'none' }}
                {...register('id')} />

            <Grid container alignItems="center" spacing={2} >
                <Grid item xs={12} lg={4} >
                    <TextField
                        label="Title"// i18n
                        variant="standard"
                        disabled={disabled}
                        inputProps={register('title', { required: true })}
                        name="title" /> {/* i18n label */}
                </Grid>
            </Grid>
        </fieldset>
    </form>)
}


export function CompanyManage() {
    const { t } = useTranslation('translation', { keyPrefix: 'company.manage' });
    const apiFetch = useApiFetch()

    const submit = useCallback((item: CompanyDto) => {
        return ((item.id) ? apiFetch(`company/${item.id}`, { method: 'PUT', body: JSON.stringify(item) }) :
            apiFetch('company', { method: 'POST', body: JSON.stringify(item) })
        ).then(async (response) => {
            const data = await response.json()
            return data?.data as CompanyDto | undefined
        })
    }, [apiFetch])

    const onDelete = useCallback((item: CompanyDto) => {
        return apiFetch(`company/${item.id}`, { method: 'DELETE' }).then(() => {
            return
        })
    }, [apiFetch])

    const onFetch = useCallback((params: FetchParams) => {
        return apiFetch('company/fetch', { method: 'POST', body: JSON.stringify(params) })
            .then(async (response) => {
                const data = await response.json()
                return ({
                    items: (data?.data ?? []) as Array<CompanyDto>,
                    params
                })
            })
    }, [apiFetch])

    const config = useMemo(() => {
        return {
            collection: {
                grid: {
                    ItemDisplay: CompanyGridItemDisplay,
                } as GridConfig<CompanyDto>,
                table: {
                    columns: [
                        {
                            field: 'title',
                            label: t('Title'),
                            Title: DefaultColumnTitleDisplay<CompanyDto>,
                            Display: DefaultColumnDisplay<CompanyDto>,
                        } as TableField<CompanyDto>
                    ]
                } as TableConfig<CompanyDto>
            } as CollectionConfig<CompanyDto>,
            form: {
                id: 'company-form',
                submit,
                Display: CompanyFormDisplay,
            } as FormConfig<CompanyDto>,
            actions: {
                onDelete,
                onFetch
            } as Actions<CompanyDto>
        } as ManageConfig<CompanyDto>
    }, [onDelete, onFetch, submit, t])

    return (<Manage config={config} />)
}