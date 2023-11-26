import { PaginationParamsDto } from 'src/_types/pagination-params.dto';

export class SchoolTermPaginationParamsDto extends PaginationParamsDto<
  'id' | 'createdAt' | 'updatedAt' | 'branchId'
> {}
