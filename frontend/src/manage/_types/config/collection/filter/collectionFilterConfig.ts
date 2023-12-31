import { ComponentType } from "react";
import { FilterDisplayProps } from "@/manage/_types/props/filterDisplayProps";
import { FetchParams } from "@/manage/_types/status/params/fetchParams";

export interface CollectionFilterConfig {
  id: string;
  map?: (param: FetchParams) => Promise<any>;
  disabled?: boolean;
  Display: ComponentType<FilterDisplayProps> | undefined;
  pageOptions?: Array<number>;
  pageInputLabel?: string
}
