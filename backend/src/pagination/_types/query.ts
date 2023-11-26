export type PaginationQueryField = string | symbol;

export interface PaginationQuery {
  skip?: number;
  take?: number;
  select?: PaginationQuerySelect;
  orderBy?: PaginationQueryOrderBy;
  where?: PaginationQueryFilter;
}

export interface PaginationQuerySelect {
  [x: PaginationQueryField]: PaginationQuerySelect | boolean;
}

export interface PaginationQueryOrderBy {
  [x: PaginationQueryField]: PaginationQueryOrderBy | 'asc' | 'desc';
}

export interface PaginationQueryFilter {
  [x: PaginationQueryField]: PaginationQueryFilter | boolean | number | string;
}
