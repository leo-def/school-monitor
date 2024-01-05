"use client";

import React, { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { SessionEntityAutocomplete, SessionEntityAutocompleteProps } from "@/session/_components/sessionEntityAutocomplete";
import { useApiFetch } from "@/commons/api/_hooks/useApiFetch";
import { AutocompleteFetchResult } from "@/commons/_types/autocompleteFetchResult";
import { SchoolSubjectDto } from "../_types/schoolSubject.dto";

export interface SchoolSubjectAutocompleteProps extends Omit<
    SessionEntityAutocompleteProps<SchoolSubjectDto>,
    'onFetch' |
    'label'|
    'noOptionText'> { }

export function SchoolSubjectAutocomplete(props: SchoolSubjectAutocompleteProps) {
    const { t } = useTranslation('translation', { keyPrefix: 'schoolSubject.autocomplete' })
    const apiFetch = useApiFetch()

    const onFetch = useCallback((value?: string, inputValue?: string, params?: any, payload?: any) => {
        return apiFetch('school-subject/fetch', { method: 'POST', body: JSON.stringify(payload) })
            .then(async(response: Response) => {
                const { data, error} = await response.json();
                return ({items: data.items, error}) as AutocompleteFetchResult<SchoolSubjectDto>
            })
    }, [apiFetch])
    
    return (<SessionEntityAutocomplete
        {...props}
        onFetch={onFetch}
        label={t('Subject')}
        noOptionText={t('No Options')}
    />)
}

