import { PaginationParamsDto } from 'src/_types/pagination-params.dto';

export class SchoolEventPaginationParamsDto extends PaginationParamsDto<
  | 'id'
  | 'createdAt'
  | 'updatedAt'
  | 'title'
  | 'desc'
  | 'recess'
  | 'start'
  | 'end'
  | 'schoolSectionId'
> {}
