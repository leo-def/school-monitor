import React, { useState, useCallback, useEffect, useMemo } from "react";
import { AutocompleteInputChangeReason, Autocomplete as MuiAutocomplete, TextField, CircularProgress } from "@mui/material";
import { useDebounce } from "@/commons/_hooks/useDebounce";
import { AutocompleteFetchResult } from "@/commons/_types/autocompleteFetchResult";
import { AutocompleteItem } from "@/commons/_types/autocompleteItem";
export interface AutocompleteFetchRequest<T> {
    value?: AutocompleteItem<T>
    inputValue?: string;
    params?: any;
    payload?: any;
}
export interface AutocompleteProps<T> {
    readonly onFetch: (request: AutocompleteFetchRequest<T>) => Promise<AutocompleteFetchResult<T> | undefined>;
    readonly value?: string;
    readonly onChange?: (value?: AutocompleteItem<T>) => void;
    readonly disabled?: boolean;
    readonly params?: any;
    readonly label: string;
    readonly noOptionText?: string;
    readonly size?: 'small' | 'medium';
    readonly debounce?: number;
}

export function Autocomplete<T>({
    onFetch,
    onChange,
    disabled,
    params,
    label,
    noOptionText,
    size,
    debounce,
    ...props
}: AutocompleteProps<T>) {
    const [value, setValue] = useState(undefined as AutocompleteItem<T> | undefined)
    const [fetchResult, setFetchResult] = useState(undefined as AutocompleteFetchResult<T> | undefined)
    const [loading, setLoading] = useState(false as boolean)

    const debounceFunc = useDebounce()

    const fetch = useCallback((inputValue?: string) => {
        setLoading(true)
        onFetch({
            value,
            inputValue,
            params,
            payload: undefined,
        } as AutocompleteFetchRequest<T>)
            .then((result: AutocompleteFetchResult<T> | undefined) => {
                setFetchResult(result)
            })
            .catch((error) => {
                setFetchResult({ error })
            })
            .finally(() => {
                setLoading(false)
            })
    }, [onFetch, params, value])


    const updateValue = useCallback((newValue?: AutocompleteItem<T>) => {
        setValue(newValue)
        if (onChange) {
            onChange(newValue)
        }
    }, [onChange])

    // Initial fetch
    useEffect(() => {
        if (!fetchResult || (fetchResult.request?.params !== params && !fetchResult.error)) {
            fetch()
        }
    }, [fetch, fetchResult, params])


    useEffect(() => {
        if (fetchResult?.items) {
            setValue(fetchResult?.items.find((option) => props.value === option.value))
        }
    }, [fetchResult?.items, props.value])

    const handleInputChange = useCallback((_event: React.SyntheticEvent<Element, Event>, newInputValue: string, reason: AutocompleteInputChangeReason) => {
        debounceFunc(() => fetch(newInputValue), debounce ?? 400)
    }, [debounce, debounceFunc, fetch])

    const handleOnChange = useCallback((_event: any, newValue?: AutocompleteItem<T> | null) => {
        updateValue(newValue ?? undefined)
    }, [updateValue])

    const options = useMemo(() => (fetchResult?.items ?? []).filter(item => item.visible), [fetchResult])
    return (
        <MuiAutocomplete
            isOptionEqualToValue={(item: AutocompleteItem<T>, value: AutocompleteItem<T>) => item.label === value.label}
            getOptionLabel={(item: AutocompleteItem<T>) => item.label ?? ''}
            options={options}
            loading={loading}
            value={value ?? null}
            size={size}
            noOptionsText={noOptionText}
            onChange={handleOnChange}
            onInputChange={handleInputChange}
            disabled={disabled}
            fullWidth
            renderOption={(props, option) => {
                return (
                    <li {...props} key={option.value}>
                        {option.label}
                    </li>
                )
            }}
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