import { GridItemDisplayProps } from "@/manage/_types/props/gridItemDisplayProps";
import { ComponentType, ReactElement, ReactNode } from "react";

export interface GridConfig<T> {
  ItemDisplay: ComponentType<GridItemDisplayProps<T>> | undefined;
}
