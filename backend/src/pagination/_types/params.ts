export type PaginationParamsField = string | number | symbol;

export interface PaginationParams<TField extends PaginationParamsField> {
  skip?: number;
  take?: number;
  select?: Array<TField>;
  orderBy?: PaginationParamsOrderBy<TField>;
  filter?: PaginationParamsFilter<TField>;
}

export type PaginationParamsOrderBy<TField extends PaginationParamsField> =
  Record<TField, 'asc' | 'desc'>;

export type PaginationParamsFilter<TField extends PaginationParamsField> =
  Record<TField, boolean | number | string>;
