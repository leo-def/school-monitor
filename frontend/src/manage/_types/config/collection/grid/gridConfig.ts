import { ComponentType } from "react";
import { GridItemDisplayProps } from "@/manage/_types/props/gridItemDisplayProps";

export interface GridConfig<T> {
  ItemDisplay: ComponentType<GridItemDisplayProps<T>> | undefined;
}
