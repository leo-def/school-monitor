import { PaginationParams } from './dto/params';
import { PaginationField } from './field';

export class PaginationResponse<
  TData,
  TParams extends PaginationParams<PaginationField>,
> {
  items: Array<TData>;
  params?: TParams;
  count?: number;
}
