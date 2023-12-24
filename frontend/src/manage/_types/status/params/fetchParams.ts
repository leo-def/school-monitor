import { Filter } from "./filter";
import { Sort } from "./sort";

export interface FetchParams {
  pages: number;
  page: number;
  limit: number;
  sort: Array<Sort>;
  filter: Array<Filter>;
}
