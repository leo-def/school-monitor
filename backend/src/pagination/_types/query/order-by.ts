import { PaginationField } from '../field';

export interface PaginationQueryOrderBy {
  [x: PaginationField]: PaginationQueryOrderBy | 'asc' | 'desc';
}
