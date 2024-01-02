import { PaginationField } from '../field';

export interface PaginationQuerySelect {
  [x: PaginationField]: PaginationQuerySelect | boolean;
}
