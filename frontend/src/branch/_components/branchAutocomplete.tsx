'use client'

import React, { useState, useCallback, useEffect, useMemo } from "react";
import { useApiFetch } from "@/commons/api/_hooks/useApiFetch";
import { useAddMessage } from "@/commons/message/_hooks/useAddMessage";
import { MessageSeverityEnum } from "@/commons/message/_enums/messageSeverity.enum";
import { Autocomplete, AutocompleteInputChangeReason, CircularProgress, TextField } from "@mui/material";
import { useTranslation } from "react-i18next";
import { BranchDto } from "../_types/branch.dto";
import { useDebounce } from "@/commons/_hooks/useDebounce";

export interface BranchAutocompleteProps {
    readonly label?: string;
    readonly companyId?: string;
    readonly options?: Array<string>;
    readonly disabled?: boolean;
    readonly value?: string;
    readonly onChange?: (value: string) => void;
    readonly onObjectChange?: (value: BranchDto) => void;
    readonly companyBranch?: boolean;
    readonly size?: 'small' | 'medium'
}

export function BranchAutocomplete({ label, size, companyBranch, companyId, options, disabled, onChange, onObjectChange, value }: BranchAutocompleteProps) {
    const { t } = useTranslation('translation', { keyPrefix: 'branch.autocomplete' });
    const [id, setId] = useState('' as string | undefined)
    const [branchs, setBranchs] = useState([] as Array<any>)
    const [requestSent, setRequestSent] = useState(false as undefined | string | false)
    const [loading, setLoading] = useState(false as boolean)
    const apiFetch = useApiFetch()
    const addMessage = useAddMessage()
    const debounce = useDebounce()

    const fetch = useCallback((title?: string) => {
        if (companyBranch && !companyId) {
            setBranchs([])
            return;
        }
        const fetchPayload = {
            filter: {
                companyId,
                ...(options ? { id: { in: options } } : {}),
                ...(title ? { title: { contains: title } } : {}),
            }
        }
        setLoading(true)
        apiFetch('branch/fetch', { method: 'POST', body: JSON.stringify(fetchPayload) })
            .then(async (response) => {
                const data = await response.json()
                if (data.error) {
                    addMessage({ title: data.error, severity: MessageSeverityEnum.ERROR })
                } else {
                    setBranchs(data.data.items)
                }
            })
            .catch((err) => {
                addMessage({ title: (err?.message ?? err), severity: MessageSeverityEnum.ERROR })
            })
            .finally(() => {
                setRequestSent(companyId)
                setLoading(false)
            })
    }, [companyBranch, companyId, options, apiFetch, addMessage])


    const objectValue = useMemo(() => branchs.find(branch => branch.id === id) ?? null, [branchs, id])

    useEffect(() => {
        setId(value)
    }, [value])

    useEffect(() => {

        if (requestSent === false || requestSent !== companyId) {
            fetch()
        }
    }, [companyId, fetch, requestSent])

    const handleInputChange = useCallback((event: React.SyntheticEvent<Element, Event>, value: string, reason: AutocompleteInputChangeReason) => {
        if (value !== objectValue?.title) {
            setId(undefined)
        }
        debounce(() => fetch(value), 400)
    }, [debounce, fetch, objectValue?.title])

    const handleOnChange = useCallback(
        (_event: any, newValue: BranchDto) => {
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
            isOptionEqualToValue={(branchs, value) => branchs.title === value.title}
            getOptionLabel={(branchs) => branchs.title}
            options={branchs}
            loading={loading}
            value={objectValue}
            size={size}
            noOptionsText={t('No Options')}
            onChange={handleOnChange}
            onInputChange={handleInputChange}
            disabled={disabled}
            fullWidth
            renderInput={(params) => (
                <TextField
                    {...params}
                    label={label ?? t('Branch')}
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