import { PaginationParamsDto } from 'src/_types/pagination-params.dto';

export class SchoolGradePaginationParamsDto extends PaginationParamsDto<
  | 'id'
  | 'createdAt'
  | 'updatedAt'
  | 'title'
  | 'desc'
  | 'value'
  | 'templateId'
  | 'appraiserId'
  | 'assessedId'
> {}
