import { useCallback, useMemo } from "react";
import { Autocomplete, AutocompleteProps } from "@/commons/_components/autocomplete/autocomplete";
import { useApiFetch } from "@/commons/api/_hooks/useApiFetch";
import { EntityDto } from "@/commons/api/_types/entity.dto";
import { MessageSeverityEnum } from "@/commons/message/_enums/messageSeverity.enum";
import { useAddMessage } from "@/commons/message/_hooks/useAddMessage";

export interface EntityAutocompleteProps<T extends EntityDto> extends Pick<
    AutocompleteProps<T>,
    'disabled' |
    'value' |
    'onChange' |
    'onObjectChange' |
    'size' |
    'label' |
    'noOptionText'
> {
    readonly path: string
    readonly titleField?: string
    readonly fetchPayload?: any
    readonly getLabel?: (param?: T) => string | undefined;
}

export function EntityAutocomplete<T extends EntityDto>({ label, noOptionText, disabled, value, onChange, onObjectChange, size, path, fetchPayload, ...props }: EntityAutocompleteProps<T>) {
    const apiFetch = useApiFetch()
    const addMessage = useAddMessage()
    const titleField = useMemo(() => props.titleField ?? 'title', [props.titleField])
    const getDefaultLabel = useCallback((param?: T) => param ? (param as any)[titleField] : undefined, [titleField])


    const fetch = useCallback((title?: string, params?: any) => {
        const payload = {
            ...(params ?? {}),
            filter: {
                ...(params?.filter ?? {}),
                ...(title ? { [titleField]: { contains: title } } : {})
            }
        }
        return apiFetch(path, { method: 'POST', body: JSON.stringify(payload) })
    }, [apiFetch, path, titleField])
    const onApiFetchError = useCallback(
        (err?: Error, response?: any) => {
            if (err) {
                addMessage({ title: (err?.message ?? err), severity: MessageSeverityEnum.ERROR })
                return
            }
            addMessage({ title: response, severity: MessageSeverityEnum.ERROR })
        }, [addMessage])
    const getValue = useCallback((param?: T) => param?.id, []);
    const getLabel = useCallback((param?: T) => (props.getLabel ? props.getLabel(param) : getDefaultLabel(param)), [getDefaultLabel, props]);
    return (<Autocomplete
        apiFetch={fetch}
        getLabel={getLabel}
        getValue={getValue}
        onApiFetchError={onApiFetchError}
        label={label}
        noOptionText={noOptionText}
        disabled={disabled}
        value={value}
        onChange={onChange}
        onObjectChange={onObjectChange}
        size={size}
        params={fetchPayload}
    />)
}
