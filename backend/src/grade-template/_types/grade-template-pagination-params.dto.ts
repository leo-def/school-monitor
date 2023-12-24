import { PaginationParamsDto } from 'src/_types/pagination-params.dto';

export class GradeTemplatePaginationParamsDto extends PaginationParamsDto<
  | 'id'
  | 'createdAt'
  | 'updatedAt'
  | 'title'
  | 'max'
  | 'min'
  | 'passingScore'
  | 'companyId'
  | 'branchId'
> {}
