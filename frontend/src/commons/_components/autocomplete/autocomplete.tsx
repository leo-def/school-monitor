import React, { useState, useCallback, useMemo, useEffect } from "react";
import { AutocompleteInputChangeReason, Autocomplete as MuiAutocomplete, TextField, CircularProgress } from "@mui/material";
import { useDebounce } from "@/commons/_hooks/useDebounce";
import { AutocompleteFetchResult } from "@/commons/_types/autocompleteFetchResult";
import { AutocompleteItem } from "@/commons/_types/autocompleteItem";
export interface AutocompleteFetchRequest {
    value?: string;
    inputValue?: string;
    params?: any;
    payload?: any
}
export interface AutocompleteProps<T> {
    readonly onFetch: (request: AutocompleteFetchRequest) => Promise<AutocompleteFetchResult<T> | undefined>;
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
    const [inputValue, setInputValue] = useState(undefined as string | undefined)
    const [value, setValue] = useState(undefined as AutocompleteItem<T> | undefined)
    const [fetchResult, setFetchResult] = useState(undefined as AutocompleteFetchResult<T> | undefined)
    const [loading, setLoading] = useState(false as boolean)

    const debounceFunc = useDebounce()

    const fetch = useCallback(() => {
        setLoading(true)
        onFetch({
            value,
            inputValue,
            params,
            payload: undefined,
        } as AutocompleteFetchRequest)
            .then((result: AutocompleteFetchResult<T> | undefined) => {
                setFetchResult(result)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [inputValue, onFetch, params, value])
    

    const updateValue  = useCallback((newValue?: AutocompleteItem<T>) => {
        setValue(newValue)
        if(onChange){
            onChange(newValue)
        }
    }, [onChange])
 
    // Initial fetch
    useEffect(() => {
        if (!fetchResult) {
            fetch()
        }
    }, [fetch, fetchResult])


    const handleInputChange = useCallback((_event: React.SyntheticEvent<Element, Event>, newInputValue: string, reason: AutocompleteInputChangeReason) => {
        if (inputValue !== newInputValue) {
            updateValue(undefined)
        }
        setInputValue(inputValue)
        debounceFunc(() => fetch(), debounce ?? 400)
    }, [debounce, debounceFunc, fetch, inputValue, updateValue])

    const handleOnChange = useCallback((_event: any, newValue?: AutocompleteItem<T> | null) => {
        updateValue(newValue ?? undefined)
    }, [updateValue])

    return (
        <MuiAutocomplete
            isOptionEqualToValue={(item: AutocompleteItem<T>, value: AutocompleteItem<T>) => item.label === value.label}
            getOptionLabel={(item: AutocompleteItem<T>) => item.label ?? ''}
            options={fetchResult?.items ?? []}
            loading={loading}
            value={value ?? null}
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