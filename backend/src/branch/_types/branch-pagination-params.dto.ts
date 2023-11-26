import { PaginationParamsDto } from 'src/_types/pagination-params.dto';

export class BranchPaginationParamsDto extends PaginationParamsDto<
  'id' | 'createdAt' | 'updatedAt' | 'title' | 'companyId'
> {}
