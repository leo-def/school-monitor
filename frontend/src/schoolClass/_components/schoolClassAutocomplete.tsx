"use client";

import React, { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { SessionEntityAutocomplete, SessionEntityAutocompleteProps } from "@/session/_components/sessionEntityAutocomplete";
import { useApiFetch } from "@/commons/api/_hooks/useApiFetch";
import { AutocompleteFetchResult } from "@/commons/_types/autocompleteFetchResult";
import { SchoolClassDto } from "../_types/schoolClass.dto";

export interface SchoolClassAutocompleteProps extends Omit<
    SessionEntityAutocompleteProps<SchoolClassDto>,
    'onFetch' |
    'label'|
    'noOptionText'> { }

export function SchoolClassAutocomplete(props: SchoolClassAutocompleteProps) {
    const { t } = useTranslation('translation', { keyPrefix: 'schoolClass.autocomplete' })
    const apiFetch = useApiFetch()

    const onFetch = useCallback((value?: string, inputValue?: string, params?: any, payload?: any) => {
        return apiFetch('school-class/fetch', { method: 'POST', body: JSON.stringify(payload) })
            .then(async(response: Response) => {
                const { data, error} = await response.json();
                return ({items: data.items, error}) as AutocompleteFetchResult<SchoolClassDto>
            })
    }, [apiFetch])

    return (<SessionEntityAutocomplete
        {...props}
        onFetch={onFetch}
        label={t('Class')}
        noOptionText={t('No Options')}
    />)
}

