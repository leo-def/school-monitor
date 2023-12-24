'use client'

import React, { useState, useCallback, useEffect, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { Autocomplete, AutocompleteInputChangeReason, CircularProgress, TextField } from "@mui/material";
import { useApiFetch } from "@/commons/api/_hooks/useApiFetch";
import { useAddMessage } from "@/commons/message/_hooks/useAddMessage";
import { MessageSeverityEnum } from "@/commons/message/_enums/messageSeverity.enum";
import { useDebounce } from "@/commons/_hooks/useDebounce";
import { CompanyDto } from "../_types/company.dto";

export interface CompanyAutocompleteProps {
    readonly label?: string;
    readonly options?: Array<string>;
    readonly disabled?: boolean;
    readonly value?: string;
    readonly onChange?: (value: string) => void;
    readonly onObjectChange?: (value: CompanyDto) => void;
    readonly size?: 'small' | 'medium'
}

export function CompanyAutocomplete({ label, size, options, disabled, onChange, onObjectChange, value }: CompanyAutocompleteProps) {
    const { t } = useTranslation('translation', { keyPrefix: 'company.autocomplete' })
    const [id, setId] = useState('' as string | undefined)
    const [companies, setCompanies] = useState([] as Array<any>)
    const [requestSent, setRequestSent] = useState(false as boolean)
    const [loading, setLoading] = useState(false as boolean)
    const apiFetch = useApiFetch()
    const addMessage = useAddMessage()
    const debounce = useDebounce()

    const fetch = useCallback((title?: string) => {
        const fetchPayload = {
            filter: {
                ...(options ? { id: { in: options } } : {}),
                ...(title ? { title: { contains: title } } : {})
            }
        }
        setLoading(true)
        apiFetch('company/fetch', { method: 'POST', body: JSON.stringify(fetchPayload) })
            .then(async (response) => {
                const data = await response.json()
                if (data.error) {
                    addMessage({ title: data.error, severity: MessageSeverityEnum.ERROR })
                } else {
                    setCompanies(data.data)
                }
            })
            .catch((err) => {
                addMessage({ title: (err?.message ?? err), severity: MessageSeverityEnum.ERROR })
            })
            .finally(() => {
                setRequestSent(true)
                setLoading(false)
            })
    }, [apiFetch, addMessage, setRequestSent, options])

    const objectValue = useMemo(() => companies.find(company => company.id === id) ?? null, [companies, id])

    useEffect(() => {
        setId(value)
    }, [value])

    useEffect(() => {
        if (!requestSent) {
            fetch()
        }
    }, [fetch, requestSent])

    const handleInputChange = useCallback((event: React.SyntheticEvent<Element, Event>, value: string, reason: AutocompleteInputChangeReason) => {
        if (value !== objectValue?.title) {
            setId(undefined)
        }
        debounce(() => fetch(value), 400)
    }, [debounce, fetch, objectValue?.title])

    const handleOnChange = useCallback(
        (_event: any, newValue: CompanyDto) => {
            if (disabled) {
                return;
            }
            if (onChange) {
                onChange(newValue?.id)
            }
            if (onObjectChange) {
                onObjectChange(newValue)
            }
        },
        [disabled, onChange, onObjectChange],
    )

    return (
        <Autocomplete
            isOptionEqualToValue={(companies, value) => companies.title === value.title}
            getOptionLabel={(companies) => companies.title}
            options={companies}
            loading={loading}
            value={objectValue}
            size={size}
            noOptionsText={label ?? t('No Options')}
            onChange={handleOnChange}
            onInputChange={handleInputChange}
            disabled={disabled}
            fullWidth
            renderInput={(params) => (
                <TextField
                    {...params}
                    label={t('Company')}
                    InputProps={{
                        ...params.InputProps,
                        endAdornment: (
                            <React.Fragment>
                                {loading ? <CircularProgress color="inherit" size={20} /> : null}
                                {params.InputProps.endAdornment}
                            </React.Fragment>
                        ),
                    }}
                />
            )}
        />)
}