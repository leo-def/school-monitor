import { PaginationParams, PaginationParamsField } from './params';

export interface PaginationResponse<
  TData,
  TParams extends PaginationParams<PaginationParamsField>,
> {
  items: Array<TData>;
  params?: TParams;
}
