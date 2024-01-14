"use client";

import React, { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { SessionEntityAutocomplete, SessionEntityAutocompleteProps } from "@/session/_components/sessionEntityAutocomplete";
import { useApiFetch } from "@/commons/api/_hooks/useApiFetch";
import { AutocompleteFetchResult } from "@/commons/_types/autocompleteFetchResult";
import { SchoolSubjectDto } from "../_types/schoolSubject.dto";
import { AutocompleteFetchRequest } from "@/commons/_components/autocomplete/autocomplete";

export interface SchoolSubjectAutocompleteProps extends Omit<
    SessionEntityAutocompleteProps<SchoolSubjectDto>,
    'onFetch' |
    'label' |
    'noOptionText'> { }

export function SchoolSubjectAutocomplete(props: SchoolSubjectAutocompleteProps) {
    const { t } = useTranslation('translation', { keyPrefix: 'schoolSubject.autocomplete' })
    const apiFetch = useApiFetch()

    const fetch = useCallback((request: AutocompleteFetchRequest<SchoolSubjectDto>) => {
        const map = (arr: Array<SchoolSubjectDto>, visible: boolean) => arr.map((object: SchoolSubjectDto) => ({
            value: object.id,
            label: object.title,
            visible,
            object,
        }))
        return apiFetch('school-subject/fetch', { method: 'POST', body: JSON.stringify(request.payload) })
            .then(async (response?: Response) => {
                if (!response) { return undefined; }
                const { data, error } = await response.json();
                return ({
                    items: [
                        ...map(data.items ?? [], true),
                        ...map(data.extra ?? [], false)
                    ], error, request
                }) as AutocompleteFetchResult<SchoolSubjectDto>
            })
    }, [apiFetch])

    return (<SessionEntityAutocomplete
        {...props}
        onFetch={fetch}
        label={t('Subject')}
        noOptionText={t('No Options')}
    />)
}

