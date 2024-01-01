"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import { SessionEntityAutocomplete, SessionEntityAutocompleteProps } from "@/session/_components/sessionEntityAutocomplete";
import { SchoolClassDto } from "../_types/schoolClass.dto";
export interface SchoolClassAutocompleteProps extends Pick<
    SessionEntityAutocompleteProps<SchoolClassDto>,
    'disabled' |
    'value' |
    'onChange' |
    'onObjectChange' |
    'size' |
    'branchId' |
    'companyId'
> { }

export function SchoolClassAutocomplete({
    disabled,
    value,
    onChange,
    onObjectChange,
    size,
    branchId,
    companyId
}: SchoolClassAutocompleteProps) {
    const { t } = useTranslation('translation', { keyPrefix: 'schoolClass.autocomplete' })
    return (<SessionEntityAutocomplete
        disabled={disabled}
        value={value}
        size={size}
        onChange={onChange}
        onObjectChange={onObjectChange}
        branchId={branchId}
        companyId={companyId}
        label={t('Class')}
        noOptionText={t('No Options')}
        path="school-class/fetch"
    />)
}

