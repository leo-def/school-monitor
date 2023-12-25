import { ComponentType } from "react";
import { ColumnDisplayProps } from "@/manage/_types/props/columnDisplayProps";
import { ColumnTitleDisplayProps } from "@/manage/_types/props/columnTitleDisplayProps";

export interface TableField<T> {
  field: string;
  label?: string;
  Title: ComponentType<ColumnTitleDisplayProps<T>> | undefined;
  Display: ComponentType<ColumnDisplayProps<T>> | undefined;
}
