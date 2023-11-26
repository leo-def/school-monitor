import { PaginationParamsDto } from 'src/_types/pagination-params.dto';

export class SchoolSubjectPaginationParamsDto extends PaginationParamsDto<
  'id' | 'createdAt' | 'updatedAt' | 'title' | 'branchId'
> {}
