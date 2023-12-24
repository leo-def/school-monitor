import { PaginationParamsDto } from 'src/_types/pagination-params.dto';

export class SchoolProjectPaginationParamsDto extends PaginationParamsDto<
  | 'id'
  | 'createdAt'
  | 'updatedAt'
  | 'title'
  | 'desc'
  | 'status'
  | 'date'
  | 'deadline'
  | 'deliveryDate'
  | 'schoolSectionId'
  | 'schoolGradeId'
> {}
