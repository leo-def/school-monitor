import { SortOrderEnum } from "@/manage/_enums/sortOrder.enum";

export interface Sort {
  field: string;
  order: SortOrderEnum;
}
