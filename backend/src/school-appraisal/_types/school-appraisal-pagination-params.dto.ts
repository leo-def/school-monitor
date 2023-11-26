import { PaginationParamsDto } from 'src/_types/pagination-params.dto';

export class SchoolAppraisalPaginationParamsDto extends PaginationParamsDto<
  | 'id'
  | 'createdAt'
  | 'updatedAt'
  | 'title'
  | 'desc'
  | 'date'
  | 'schoolSectionId'
  | 'gradeId'
> {}
