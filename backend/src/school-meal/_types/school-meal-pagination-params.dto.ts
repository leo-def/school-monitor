import { PaginationParamsDto } from 'src/_types/pagination-params.dto';

export class SchoolMealPaginationParamsDto extends PaginationParamsDto<
  | 'id'
  | 'createdAt'
  | 'updatedAt'
  | 'title'
  | 'desc'
  | 'type'
  | 'weekDays'
  | 'schoolSectionId'
> {}
