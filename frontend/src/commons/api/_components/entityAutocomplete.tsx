import { useCallback, useMemo } from "react";
import { Autocomplete, AutocompleteFetchRequest, AutocompleteProps } from "@/commons/_components/autocomplete/autocomplete";
import { EntityDto } from "@/commons/api/_types/entity.dto";
import { MessageSeverityEnum } from "@/commons/message/_enums/messageSeverity.enum";
import { useAddMessage } from "@/commons/message/_hooks/useAddMessage";
import { AutocompleteFetchResult } from "@/commons/_types/autocompleteFetchResult";

export interface EntityAutocompleteProps<T extends EntityDto> extends AutocompleteProps<T> {
    readonly options?: Array<string>;
    readonly titleField?: string;
}

export function EntityAutocomplete<T extends EntityDto>({
    titleField,
    options,
    ...props
}: EntityAutocompleteProps<T>) {
    const addMessage = useAddMessage()

    const onFetch = useCallback(({
        value,
        inputValue,
        params,
        payload,
    }: AutocompleteFetchRequest) => {
        const newPayload = {
            ...(payload ?? {}),
            filter: {
                ...(payload?.filter ?? {}),
                ...(params?.options ? { id: { in: params.options } } : {}),
                ...(inputValue ? { [params.titleField]: { contains: inputValue } } : {}),
            },
            ...(value ? {extra: { id: value }} : {})
        }
        return props.onFetch({
            value,
            inputValue,
            params,
            payload: newPayload,
        })
            .then((response: AutocompleteFetchResult<T> | undefined) => {
                if(response?.error) {
                    throw response?.error
                }
                return response
            })
            .catch((err) => {
                addMessage({ title: (err?.message ?? err), severity: MessageSeverityEnum.ERROR })
                return err
            })
    }, [addMessage, props])

    const params = useMemo(() => ({
        ...(props.params ?? {}),
        options,
    }), [options, props.params])
    return (<Autocomplete
        {...props}
        onFetch={onFetch}
        params={params}
    />)
}
