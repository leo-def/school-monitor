"use client";

import React, {  useCallback } from "react";
import { useTranslation } from "react-i18next";
import { EntityAutocomplete, EntityAutocompleteProps } from "@/commons/api/_components/entityAutocomplete";
import { useApiFetch } from "@/commons/api/_hooks/useApiFetch";
import { AutocompleteFetchResult } from "@/commons/_types/autocompleteFetchResult";
import { CompanyDto } from "../_types/company.dto";
import { AutocompleteFetchRequest } from "@/commons/_components/autocomplete/autocomplete";

export interface CompanyAutocompleteProps extends Omit<EntityAutocompleteProps<CompanyDto>,
    'onFetch' |
    'label'|
    'noOptionText'> { }

export function CompanyAutocomplete(props: CompanyAutocompleteProps) {
    const { t } = useTranslation('translation', { keyPrefix: 'company.autocomplete' })
    const apiFetch = useApiFetch()

    const onFetch = useCallback((request: AutocompleteFetchRequest) => {
        const map = (arr: Array<CompanyDto>, visible: boolean) => arr.map((object: CompanyDto) => ({
            value: object.id,
            label: object.title,
            visible,
            object,
        }))
        return apiFetch('company/fetch', { method: 'POST', body: JSON.stringify(request.payload) })
        .then(async(response: Response) => {
            const { data, error} = await response.json();
            return ({items: [
                ...map(data.items ?? [], true),
                ...map(data.extra ?? [], false)
            ] , error, request}) as AutocompleteFetchResult<CompanyDto>
        })
    }, [apiFetch])

    return (<EntityAutocomplete
        {...props}
        onFetch={onFetch}
        label={ t('Company')}
        noOptionText={ t('No Options')}
    />)
}