"use client";

import React, { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { SessionEntityAutocomplete, SessionEntityAutocompleteProps } from "@/session/_components/sessionEntityAutocomplete";
import { useApiFetch } from "@/commons/api/_hooks/useApiFetch";
import { AutocompleteFetchResult } from "@/commons/_types/autocompleteFetchResult";
import { SchoolClassDto } from "../_types/schoolClass.dto";
import { AutocompleteFetchRequest } from "@/commons/_components/autocomplete/autocomplete";

export interface SchoolClassAutocompleteProps extends Omit<
    SessionEntityAutocompleteProps<SchoolClassDto>,
    'onFetch' |
    'label' |
    'noOptionText'> { }

export function SchoolClassAutocomplete(props: SchoolClassAutocompleteProps) {
    const { t } = useTranslation('translation', { keyPrefix: 'schoolClass.autocomplete' })
    const apiFetch = useApiFetch()

    const fetch = useCallback((request: AutocompleteFetchRequest<SchoolClassDto>) => {
        const map = (arr: Array<SchoolClassDto>, visible: boolean) => arr.map((object: SchoolClassDto) => ({
            value: object.id,
            label: object.title,
            visible,
            object,
        }))
        return apiFetch('school-class/fetch', { method: 'POST', body: JSON.stringify(request.payload) })
            .then(async (response?: Response) => {
                if (!response) { return undefined; }
                const { data, error } = await response.json();
                return ({
                    items: [
                        ...map(data.items ?? [], true),
                        ...map(data.extra ?? [], false)
                    ], error, request
                }) as AutocompleteFetchResult<SchoolClassDto>
            })
    }, [apiFetch])

    return (<SessionEntityAutocomplete
        {...props}
        onFetch={fetch}
        label={t('Class')}
        noOptionText={t('No Options')}
    />)
}

