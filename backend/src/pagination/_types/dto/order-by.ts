import { PaginationField } from '../field';

export type PaginationParamsOrderBy<TField extends PaginationField> = Record<
  TField,
  'asc' | 'desc'
>;
