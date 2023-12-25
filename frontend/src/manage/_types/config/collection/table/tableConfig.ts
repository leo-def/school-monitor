import { ComponentType } from "react";
import { TableField } from "./tableField";
import { ActionsHeaderColumnDisplayProps } from "@/manage/_types/props/actionsHeaderColumnDisplayProps";
import { ActionsColumnDisplayProps } from "@/manage/_types/props/ActionsColumnDisplayProps";

export interface TableConfig<T> {
  columns: Array<TableField<T>>;
  actionsHeaderColumnLabel?: string;
  ActionsHeaderColumnDisplay:
    | ComponentType<ActionsHeaderColumnDisplayProps<T>>
    | undefined;
  ActionsColumnDisplay: ComponentType<ActionsColumnDisplayProps<T>> | undefined;
}

export function DefaultActionsHeaderColumnDisplay<
  T
>({}: ActionsHeaderColumnDisplayProps<T>) {
  const {
    config: {
      collection: {
        table: { actionsHeaderColumnLabel },
      },
    },
  } = useGetManageContextValue<any>();
  return <React.Fragment>{actionsHeaderColumnLabel}</React.Fragment>;
}

export function DefaultActionsColumnDisplay<T>({
  item,
}: ActionsColumnDisplayProps<T>) {
  return <React.Fragment></React.Fragment>;
}
