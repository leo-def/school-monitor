import { TableField } from "./tableField";

export interface TableConfig<T> {
  columns: Array<TableField<T>>;
}
