import { PaginationParamsDto } from 'src/_types/pagination-params.dto';

export class CollaboratorPaginationParamsDto extends PaginationParamsDto<
  | 'id'
  | 'createdAt'
  | 'updatedAt'
  | 'title'
  | 'accountId'
  | 'companyId'
  | 'branchId'
  | 'role'
> {}
