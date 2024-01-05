"use client";

import React, { useCallback, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { useApiFetch } from "@/commons/api/_hooks/useApiFetch";
import { SessionEntityAutocomplete, SessionEntityAutocompleteProps } from "@/session/_components/sessionEntityAutocomplete";
import { AutocompleteFetchResult } from "@/commons/_types/autocompleteFetchResult";
import { CollaboratorRole } from "../_enums/collaboratorRole";
import { CollaboratorDto } from "../_types/collaborator.dto";
import { AutocompleteFetchRequest } from "@/commons/_components/autocomplete/autocomplete";
export interface CollaboratorAutocompleteProps extends SessionEntityAutocompleteProps<CollaboratorDto>{
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

    const onFetch = useCallback((request: AutocompleteFetchRequest) => {
        const map = (arr: Array<BranchDto>, visible: boolean) => arr.map((object: BranchDto) => ({
            value: object.id,
            label: object.title,
            visible,
            object,
        }))
        const payload = {
            ...(request.payload ?? {}),
            filter: {
                ...(request.payload?.filter ?? {}),
                ...(params?.roles ? { role: { in: params?.roles } } : {})
            }
        }
        return apiFetch('branch/fetch', { method: 'POST', body: JSON.stringify(payload) })
        .then(async(response: Response) => {
            const { data, error} = await response.json();
            return ({items: [
                ...map(data.items ?? [], true),
                ...map(data.extra ?? [], false)
            ] , error, request}) as AutocompleteFetchResult<BranchDto>
        })
    }, [apiFetch])

    const params = useMemo(() =>({ ...(props.params ?? {}), roles }), [roles, props.params])

    return (<SessionEntityAutocomplete
        {...props}
        onFetch={onFetch}
        label={label ?? t('Collaborator')}
        noOptionText={ noOptionText ?? t('No Options')}
        params={params}
    />)
}

