"use client";

import React, { useCallback, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { useApiFetch } from "@/commons/api/_hooks/useApiFetch";
import { SessionEntityAutocomplete, SessionEntityAutocompleteProps } from "@/session/_components/sessionEntityAutocomplete";
import { AutocompleteFetchResult } from "@/commons/_types/autocompleteFetchResult";
import { CollaboratorRole } from "../_enums/collaboratorRole";
import { CollaboratorDto } from "../_types/collaborator.dto";
import { AutocompleteFetchRequest } from "@/commons/_components/autocomplete/autocomplete";
export interface CollaboratorAutocompleteProps extends Omit<SessionEntityAutocompleteProps<CollaboratorDto>, 'onFetch'> {
    readonly roles?: Array<CollaboratorRole>
}

export function CollaboratorAutocomplete({
    label,
    roles,
    noOptionText,
    ...props
}: CollaboratorAutocompleteProps) {
    const { t } = useTranslation('translation', { keyPrefix: 'collaborator.autocomplete' })
    const apiFetch = useApiFetch()


    const fetch = useCallback((request: AutocompleteFetchRequest<CollaboratorDto>) => {
        const map = (arr: Array<CollaboratorDto>, visible: boolean) => arr.map((object: CollaboratorDto) => ({
            value: object.id,
            label: object.title,
            visible,
            object,
        }))
        return apiFetch('collaborator/fetch', { method: 'POST', body: JSON.stringify(request.payload) })
            .then(async (response?: Response) => {
                if (!response) { return undefined; }
                const { data, error } = await response.json();
                return ({
                    items: [
                        ...map(data.items ?? [], true),
                        ...map(data.extra ?? [], false)
                    ], error, request
                }) as AutocompleteFetchResult<CollaboratorDto>
            })
    }, [apiFetch])

    const onFetch = useCallback(({
        value,
        inputValue,
        params,
        payload,
    }: AutocompleteFetchRequest<CollaboratorDto>) => {
        if (!params?.companyId && params?.companyBranch) {
            return Promise.resolve(undefined)
        }
        const newPayload = {
            ...(payload ?? {}),
            filter: {
                ...(payload?.filter ?? {}),
                ...(params?.roles ? { role: { in: params?.roles } } : {})
            }
        }

        return fetch({
            value,
            inputValue,
            params,
            payload: newPayload,
        })
    }, [fetch])


    const params = useMemo(() => ({ ...(props.params ?? {}), roles }), [roles, props.params])

    return (<SessionEntityAutocomplete
        {...props}
        onFetch={onFetch}
        label={label ?? t('Collaborator')}
        noOptionText={noOptionText ?? t('No Options')}
        params={params}
    />)
}

