import { PaginationField } from '../field';

export type PaginationParamsFilter<TField extends PaginationField> = Record<
  TField,
  boolean | number | string
>;
