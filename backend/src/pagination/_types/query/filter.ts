import { PaginationField } from '../field';

export interface PaginationQueryFilter {
  [x: PaginationField]: PaginationQueryFilter | boolean | number | string;
}
