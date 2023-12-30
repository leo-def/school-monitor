import { ComponentType } from "react";
import { TableField } from "./tableField";
import { ActionsHeaderColumnDisplayProps } from "@/manage/_types/props/actionsHeaderColumnDisplayProps";
import { ActionsColumnDisplayProps } from "@/manage/_types/props/actionsColumnDisplayProps";

export interface TableConfig<T> {
  columns: Array<TableField<T>>;
  actionsHeaderColumnLabel?: string;
  ActionsHeaderColumnDisplay:
    | ComponentType<ActionsHeaderColumnDisplayProps>
    | undefined;
  ActionsColumnDisplay: ComponentType<ActionsColumnDisplayProps<T>> | undefined;
}
