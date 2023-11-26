import { PaginationParamsDto } from 'src/_types/pagination-params.dto';

export class AccountPaginationParamsDto extends PaginationParamsDto<
  | 'id'
  | 'createdAt'
  | 'updatedAt'
  | 'username'
  | 'phone'
  | 'email'
  | 'name'
  | 'password'
  | 'role'
  | 'source'
  | 'active'
  | 'referenceToken'
  | 'referenceId'
> {}
