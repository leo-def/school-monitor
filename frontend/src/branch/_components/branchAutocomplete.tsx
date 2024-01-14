"use client";

import React, { useCallback, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { EntityAutocomplete, EntityAutocompleteProps } from "@/commons/api/_components/entityAutocomplete"; import { useApiFetch } from "@/commons/api/_hooks/useApiFetch";
import { AutocompleteFetchResult } from "@/commons/_types/autocompleteFetchResult";
import { BranchDto } from "../_types/branch.dto";
import { AutocompleteFetchRequest } from "@/commons/_components/autocomplete/autocomplete";

export interface BranchAutocompleteProps extends Omit<EntityAutocompleteProps<BranchDto>,
    'onFetch' |
    'label' |
    'noOptionText'> {
    readonly companyId?: string;
    readonly isForCompany?: boolean;
}

export function BranchAutocomplete({
    companyId,
    isForCompany,
    ...props
}: BranchAutocompleteProps) {
    const { t } = useTranslation('translation', { keyPrefix: 'branch.autocomplete' })
    const apiFetch = useApiFetch()

    const fetch = useCallback((request: AutocompleteFetchRequest<BranchDto>) => {
        const map = (arr: Array<BranchDto>, visible: boolean) => arr.map((object: BranchDto) => ({
            value: object.id,
            label: object.title,
            visible,
            object,
        }))
        return apiFetch('branch/fetch', { method: 'POST', body: JSON.stringify(request.payload) })
            .then(async (response?: Response) => {
                if (!response) { return undefined; }
                const { data, error } = await response.json();
                return ({
                    items: [
                        ...map(data.items ?? [], true),
                        ...map(data.extra ?? [], false)
                    ], error, request
                }) as AutocompleteFetchResult<BranchDto>
            })
    }, [apiFetch])

    const onFetch = useCallback(({
        value,
        inputValue,
        params,
        payload,
    }: AutocompleteFetchRequest<BranchDto>) => {
        if (!params?.companyId && params?.isForCompany) {
            return Promise.resolve(undefined)
        }
        const newPayload = {
            ...(payload ?? {}),
            filter: {
                ...(payload?.filter ?? {}),
                ...(params?.companyId
                    ? { companyId: params?.companyId }
                    : {}),

            }
        }
        return fetch({
            value,
            inputValue,
            params,
            payload: newPayload,
        })
    }, [fetch])

    const params = useMemo(
        () => ({ ...(props.params ?? {}), companyId, isForCompany }),
        [isForCompany, companyId, props.params]);
    return (<EntityAutocomplete
        {...props}
        onFetch={onFetch}
        label={t('Branch')}
        noOptionText={t('No Options')}
        params={params}
    />)
}
