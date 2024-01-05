"use client";

import React, { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { SessionEntityAutocomplete, SessionEntityAutocompleteProps } from "@/session/_components/sessionEntityAutocomplete";
import { useApiFetch } from "@/commons/api/_hooks/useApiFetch";
import { AutocompleteFetchResult } from "@/commons/_types/autocompleteFetchResult";
import { SchoolTermDto } from "../_types/schoolTerm.dto";

export interface SchoolTermAutocompleteProps extends Omit<
    SessionEntityAutocompleteProps<SchoolTermDto>,
    'onFetch' |
    'label'|
    'noOptionText'> { }

export function SchoolTermAutocomplete(props: SchoolTermAutocompleteProps) {
    const { t } = useTranslation('translation', { keyPrefix: 'schoolTerm.autocomplete' })
    const apiFetch = useApiFetch()

    const onFetch = useCallback((value?: string, inputValue?: string, params?: any, payload?: any) => {
        return apiFetch('school-term/fetch', { method: 'POST', body: JSON.stringify(payload) })
            .then(async(response: Response) => {
                const { data, error} = await response.json();
                return ({items: data.items, error}) as AutocompleteFetchResult<SchoolTermDto>
            })
    }, [apiFetch])
    
    return (<SessionEntityAutocomplete
        {...props}
        onFetch={onFetch}
        label={t('Term')}
        noOptionText={t('No Options')}
    />)
}

