import { PaginationQueryFilter } from './filter';
import { PaginationQueryOrderBy } from './order-by';
import { PaginationQuerySelect } from './select';

export interface PaginationQuery {
  skip?: number;
  take?: number;
  select?: PaginationQuerySelect;
  orderBy?: PaginationQueryOrderBy;
  where?: PaginationQueryFilter;
}
