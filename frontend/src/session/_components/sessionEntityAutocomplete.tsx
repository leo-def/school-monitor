import { EntityDto } from "@/commons/api/_types/entity.dto";
import { useCallback, useMemo } from "react";
import { EntityAutocompleteProps, EntityAutocomplete } from "../../commons/api/_components/entityAutocomplete";
import { AutocompleteFetchRequest } from "@/commons/_components/autocomplete/autocomplete";
import { useGetSessionForm } from "../_hooks/useGetSessionForm";



export interface SessionEntityAutocompleteProps<T extends EntityDto> extends EntityAutocompleteProps<T> {
    readonly companyId?: string;
    readonly branchId?: string;
}

export function SessionEntityAutocomplete<T extends EntityDto>({
    disabled,
    ...props
}: SessionEntityAutocompleteProps<T>) {

    const sessionForm = useGetSessionForm()

    const companyId = useMemo(() => sessionForm?.company.value?.id, [sessionForm?.company.value?.id])
    const branchId = useMemo(() => sessionForm?.branch.value?.id, [sessionForm?.branch.value?.id])

    const onFetch = useCallback(({
        value,
        inputValue,
        params,
        payload,
    }: AutocompleteFetchRequest<T>) => {
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
        disabled={!!disabled || !companyId}
        params={params}
    />)
}
