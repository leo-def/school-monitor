import { EntityDto } from "@/commons/api/_types/entity.dto";
import { useCallback, useMemo } from "react";
import { EntityAutocompleteProps, EntityAutocomplete } from "../../commons/api/_components/entityAutocomplete";
import { AutocompleteFetchRequest } from "@/commons/_components/autocomplete/autocomplete";



export interface SessionEntityAutocompleteProps<T extends EntityDto> extends  EntityAutocompleteProps<T> {
    readonly companyId?: string;
    readonly branchId?: string;
}

export function SessionEntityAutocomplete<T extends EntityDto>({
    disabled,
    companyId,
    branchId,
    ...props
}: SessionEntityAutocompleteProps<T>) {

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
                ...(params?.companyId
                    ? { companyId: params?.companyId }
                    : {}),
                ...(params?.branchId
                    ? { OR: [{ branchId: params?.branchId }, { branchId: null }] }
                    : {}),

            }
        }
        return props.onFetch({
            value,
            inputValue,
            params,
            payload: newPayload,
        })
    }, [props])

    const params = useMemo(() => ({
        ...(props.params ?? {}),
        companyId,
        branchId,
    }), [branchId, companyId, props.params])
    
    return (<EntityAutocomplete
        {...props}
        onFetch={onFetch}
        disabled={disabled || !companyId}
        params={params}
    />)
}
