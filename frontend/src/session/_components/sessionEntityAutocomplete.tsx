import { EntityDto } from "@/commons/api/_types/entity.dto";
import { useMemo } from "react";
import { EntityAutocompleteProps, EntityAutocomplete } from "../../commons/api/_components/entityAutocomplete";



export interface SessionEntityAutocompleteProps<T extends EntityDto> extends Pick<
    EntityAutocompleteProps<T>,
    'disabled' |
    'value' |
    'onChange' |
    'onObjectChange' |
    'size' |
    'label' |
    'noOptionText' |
    'path' |
    'fetchPayload'
> {
    readonly companyId?: string;
    readonly branchId?: string;
}

export function SessionEntityAutocomplete<T extends EntityDto>({
    disabled,
    value,
    onChange,
    onObjectChange,
    size,
    label,
    noOptionText,
    path,
    branchId,
    companyId,
    fetchPayload
}: SessionEntityAutocompleteProps<T>) {

    const entityFetchPayload = useMemo(
        () => ({
            ...(fetchPayload ?? {}),
            filter: {
                ...(fetchPayload?.filter ?? {}),
                companyId,
                ...(branchId
                    ? { OR: [{ branchId }, { branchId: null }] }
                    : {}),

            }
        }),
        [branchId, companyId, fetchPayload],
    )

    return (<EntityAutocomplete
        disabled={disabled || !companyId}
        value={value}
        size={size}
        onChange={onChange}
        onObjectChange={onObjectChange}
        fetchPayload={entityFetchPayload}
        label={label}
        noOptionText={noOptionText}
        path={path}
    />)
}
