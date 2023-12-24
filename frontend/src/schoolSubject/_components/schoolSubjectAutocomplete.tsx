'use client'

import React from "react";
import { useTranslation } from "react-i18next";
import { SchoolSubjectDto } from "../_types/schoolSubject.dto";
import { SessionEntityAutocomplete, SessionEntityAutocompleteProps } from "@/session/_components/sessionEntityAutocomplete";

export interface SchoolSubjectAutocompleteProps extends Pick<
    SessionEntityAutocompleteProps<SchoolSubjectDto>,
    'disabled' |
    'value' |
    'onChange' |
    'onObjectChange' |
    'size' |
    'branchId' |
    'companyId'
> { }

export function SchoolSubjectAutocomplete({
    disabled,
    value,
    onChange,
    onObjectChange,
    size,
    branchId,
    companyId
}: SchoolSubjectAutocompleteProps) {
    const { t } = useTranslation('translation', { keyPrefix: 'schoolSubject.autocomplete' })
    return (<SessionEntityAutocomplete
        disabled={disabled}
        value={value}
        size={size}
        onChange={onChange}
        onObjectChange={onObjectChange}
        branchId={branchId}
        companyId={companyId}
        label={t('Subject')}
        noOptionText={t('No Options')}
        path="school-subject/fetch"
    />)
}

