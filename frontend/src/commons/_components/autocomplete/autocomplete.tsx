import React, { useState, useCallback, useMemo, useEffect } from "react";
import { AutocompleteInputChangeReason, Autocomplete as MuiAutocomplete, TextField, CircularProgress } from "@mui/material";
import { useDebounce } from "@/commons/_hooks/useDebounce";

export interface AutocompleteProps<T> {
    readonly apiFetch: (inputValue?: string, payload?: any) => Promise<Response>;
    readonly getLabel: (param?: T) => string | undefined;
    readonly getValue: (param?: T) => string | undefined;
    readonly onApiFetchError: (err?: Error, response?: any) => void
    readonly label: string;
    readonly noOptionText?: string;
    readonly disabled?: boolean;
    readonly value?: string;
    readonly onChange?: (value?: string) => void;
    readonly onObjectChange?: (value?: T) => void;
    readonly size?: 'small' | 'medium'
    readonly debounce?: number
    readonly params?: any

}

export function Autocomplete<T>({
    apiFetch,
    getLabel,
    getValue,
    onApiFetchError,
    label,
    noOptionText,
    disabled,
    value,
    onChange,
    onObjectChange,
    size,
    params
}: AutocompleteProps<T>) {
    const [inputText, setInputText] = useState(undefined as string | undefined)
    const [id, setId] = useState(undefined as string | undefined)
    const [items, setItems] = useState(undefined as Array<T> | undefined)
    const [fetchParam, setFetchParam] = useState(undefined as any)
    const [loading, setLoading] = useState(false as boolean)
    const [initialFetch, setInitialFetch] = useState(false)

    const debounce = useDebounce()

    const fetch = useCallback((title?: string, params?: any) => {
        setLoading(true)
        setFetchParam(params)
        apiFetch(title, params)
            .then(async (response: Response) => {
                const data = await response.json()
                if (data.error) {
                    onApiFetchError(undefined, data.error)
                } else {
                    setItems(data.data.items)
                }
            })
            .catch((err: Error) => {
                onApiFetchError(err, null)
            })
            .finally(() => {
                setLoading(false)
                setInitialFetch(true)
            })
    }, [apiFetch, onApiFetchError])

    const triggerChange = useCallback(
        (newValue?: T) => {
            const value = getValue(newValue);
            setId(value)
            setInputText(getLabel(newValue))
            if (onChange) {
                onChange(value)
            }
            if (onObjectChange) {
                onObjectChange(newValue)
            }
        }, [getLabel, getValue, onChange, onObjectChange])

    const getObjectValue = useCallback((id?: string) => items && id ? items.find(item => getValue(item) === id) ?? undefined : undefined, [items, getValue])
    const objectValue = useMemo(() => id ? getObjectValue(id) : undefined, [getObjectValue, id])
    const objectLabel = useMemo(() => getLabel(objectValue), [getLabel, objectValue])

    // Initial fetch
    useEffect(() => {
        if (!initialFetch) {
            fetch(inputText, params)
        }
    }, [fetch, inputText, debounce, value, params, items, initialFetch])

    // Fetch on input or params change
    useEffect(() => {
        if (fetchParam !== params) {
            fetch(undefined, params)
        }
    }, [fetch, debounce, params, triggerChange, fetchParam])

    // Trigger change for default value
    useEffect(() => {
        if (value && !id) {
            triggerChange(getObjectValue(value))
        } else if (!value && id) {
            triggerChange()
        }
    }, [value, id, getObjectValue, objectValue, triggerChange])


    const handleInputChange = useCallback((_event: React.SyntheticEvent<Element, Event>, value: string, reason: AutocompleteInputChangeReason) => {
        if (value !== objectLabel) {
            triggerChange()
        }
        debounce(() => fetch(undefined, params), 400)
    }, [debounce, fetch, objectLabel, params, triggerChange])

    const handleOnChange = useCallback((_event: any, newValue: T | null) => triggerChange(newValue ?? undefined), [triggerChange])

    return (
        <MuiAutocomplete
            isOptionEqualToValue={(item: T, value: T) => getLabel(item) === getLabel(value)}
            getOptionLabel={(item: T) => getLabel(item) ?? ''}
            options={items ?? []}
            loading={loading}
            value={objectValue ?? null}
            size={size}
            noOptionsText={noOptionText}
            onChange={handleOnChange}

            onInputChange={handleInputChange}
            disabled={disabled}
            fullWidth
            renderInput={(params) => (
                <TextField
                    {...params}
                    label={label}
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