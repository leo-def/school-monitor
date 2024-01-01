"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import { SessionEntityAutocomplete, SessionEntityAutocompleteProps } from "@/session/_components/sessionEntityAutocomplete";
import { SchoolTermDto } from "../_types/schoolTerm.dto";
export interface SchoolTermAutocompleteProps extends Pick<
    SessionEntityAutocompleteProps<SchoolTermDto>,
    'disabled' |
    'value' |
    'onChange' |
    'onObjectChange' |
    'size' |
    'branchId' |
    'companyId'
> { }

export function SchoolTermAutocomplete({
    disabled,
    value,
    onChange,
    onObjectChange,
    size,
    branchId,
    companyId
}: SchoolTermAutocompleteProps) {
    const { t } = useTranslation('translation', { keyPrefix: 'schoolTerm.autocomplete' })
    return (<SessionEntityAutocomplete
        disabled={disabled}
        value={value}
        size={size}
        onChange={onChange}
        onObjectChange={onObjectChange}
        branchId={branchId}
        companyId={companyId}
        label={t('Term')}
        noOptionText={t('No Options')}
        path="school-term/fetch"
    />)
}

