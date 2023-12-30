import { PaginationParams, PaginationParamsField } from './params';

export class PaginationResponse<
  TData,
  TParams extends PaginationParams<PaginationParamsField>,
> {
  items: Array<TData>;
  params?: TParams;
  count?: number;
}
