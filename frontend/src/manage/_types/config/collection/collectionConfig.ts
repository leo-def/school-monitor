import { GridConfig } from "./grid/gridConfig";
import { TableConfig } from "./table/tableConfig";

export interface CollectionConfig<T> {
  grid: GridConfig<T>;
  table: TableConfig<T>;
}
