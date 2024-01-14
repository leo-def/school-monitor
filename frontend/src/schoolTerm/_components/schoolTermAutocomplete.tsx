"use client";

import React, { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { SessionEntityAutocomplete, SessionEntityAutocompleteProps } from "@/session/_components/sessionEntityAutocomplete";
import { useApiFetch } from "@/commons/api/_hooks/useApiFetch";
import { AutocompleteFetchResult } from "@/commons/_types/autocompleteFetchResult";
import { SchoolTermDto } from "../_types/schoolTerm.dto";
import { AutocompleteFetchRequest } from "@/commons/_components/autocomplete/autocomplete";

export interface SchoolTermAutocompleteProps extends Omit<
    SessionEntityAutocompleteProps<SchoolTermDto>,
    'onFetch' |
    'label' |
    'noOptionText'> { }

export function SchoolTermAutocomplete(props: SchoolTermAutocompleteProps) {
    const { t } = useTranslation('translation', { keyPrefix: 'schoolTerm.autocomplete' })
    const apiFetch = useApiFetch()

    const fetch = useCallback((request: AutocompleteFetchRequest<SchoolTermDto>) => {
        const map = (arr: Array<SchoolTermDto>, visible: boolean) => arr.map((object: SchoolTermDto) => ({
            value: object.id,
            label: object.title,
            visible,
            object,
        }))
        return apiFetch('school-term/fetch', { method: 'POST', body: JSON.stringify(request.payload) })
            .then(async (response?: Response) => {
                if (!response) { return undefined; }
                const { data, error } = await response.json();
                return ({
                    items: [
                        ...map(data.items ?? [], true),
                        ...map(data.extra ?? [], false)
                    ], error, request
                }) as AutocompleteFetchResult<SchoolTermDto>
            })
    }, [apiFetch])

    return (<SessionEntityAutocomplete
        {...props}
        onFetch={fetch}
        label={t('Term')}
        noOptionText={t('No Options')}
    />)
}

