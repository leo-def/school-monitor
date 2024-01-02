import { PaginationField } from '../field';
import { PaginationParamsFilter } from './filter';
import { PaginationParamsOrderBy } from './order-by';

export interface PaginationParams<TField extends PaginationField> {
  skip?: number;
  take?: number;
  select?: Array<TField>;
  orderBy?: PaginationParamsOrderBy<TField>;
  filter?: PaginationParamsFilter<TField>;
}
