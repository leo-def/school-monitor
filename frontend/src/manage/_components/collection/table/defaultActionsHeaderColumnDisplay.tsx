import { useGetManageContextValue } from "@/manage/_hooks/useGetManageContextValue";
import { ActionsHeaderColumnDisplayProps } from "@/manage/_types/props/actionsHeaderColumnDisplayProps";
import React from "react";

export interface DefaultActionsHeaderColumnDisplayProps extends ActionsHeaderColumnDisplayProps { }

export function DefaultActionsHeaderColumnDisplay<
    T
>(props: DefaultActionsHeaderColumnDisplayProps) {
    const {
        config: {
            collection: {
                table: { actionsHeaderColumnLabel },
            },
        },
    } = useGetManageContextValue<any>();
    return (<React.Fragment>{actionsHeaderColumnLabel}</React.Fragment>);
}
