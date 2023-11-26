import { PaginationParamsDto } from 'src/_types/pagination-params.dto';

export class CollaboratorPaginationParamsDto extends PaginationParamsDto<
  | 'id'
  | 'createdAt'
  | 'updatedAt'
  | 'accountId'
  | 'companyId'
  | 'branchId'
  | 'role'
> {}
