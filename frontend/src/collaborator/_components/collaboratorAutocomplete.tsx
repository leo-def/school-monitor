"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import { CollaboratorDto } from "../_types/collaborator.dto";
import { SessionEntityAutocomplete, SessionEntityAutocompleteProps } from "@/session/_components/sessionEntityAutocomplete";
import { CollaboratorRole } from "../_enums/collaboratorRole";

export interface CollaboratorAutocompleteProps extends Pick<
    SessionEntityAutocompleteProps<CollaboratorDto>,
    'label' |
    'disabled' |
    'value' |
    'onChange' |
    'onObjectChange' |
    'size' |
    'branchId' |
    'companyId'
> {
    readonly roles?: Array<CollaboratorRole>
}

export function CollaboratorAutocomplete({
    label,
    disabled,
    value,
    onChange,
    onObjectChange,
    size,
    branchId,
    companyId,
    roles
}: CollaboratorAutocompleteProps) {
    const { t } = useTranslation('translation', { keyPrefix: 'collaborator.autocomplete' })
    const fetchPayload = {
        filter: {
            ...(roles
                ? { role: { in: roles } }
                : {}
            )
        }
    }
    return (<SessionEntityAutocomplete
        disabled={disabled}
        value={value}
        size={size}
        onChange={onChange}
        onObjectChange={onObjectChange}
        branchId={branchId}
        companyId={companyId}
        label={label ?? t('Collaborator')}
        noOptionText={t('No Options')}
        path="collaborator/fetch"
        fetchPayload={fetchPayload}
    />)
}

