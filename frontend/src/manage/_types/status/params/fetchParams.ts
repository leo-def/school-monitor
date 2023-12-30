import { Filter } from "./filter";
import { Sort } from "./sort";

export interface FetchParams {
  page: number;
  limit: number;
  sort: Array<Sort>;
  select: Array<string>;
  filter: Array<Filter>;
}

export function fetchParamsToPaginationParams(params: FetchParams) {
  const { page, limit, sort, filter, select } = params;
  return {
    skip: ((page || 1) - 1) * limit,
    ...(limit ? { take: limit } : {}),
    ...(select ? { select } : {}),
    ...(filter
      ? {
          where: {
            ...filter.reduce(
              (prev, curr) => ({
                ...prev,
                [curr.field]: { contains: curr.value },
              }),
              {}
            ),
          },
        }
      : {}),
    ...(sort
      ? {
          orderBy: {
            ...sort.reduce(
              (prev, curr) => ({ ...prev, [curr.field]: curr.order }),
              {}
            ),
          },
        }
      : {}),
  };
}
/*
skip?: number;
take?: number;
select?: Array<TField>;
orderBy?: PaginationParamsOrderBy<TField>;
filter?: PaginationParamsFilter<TField>;
*/
