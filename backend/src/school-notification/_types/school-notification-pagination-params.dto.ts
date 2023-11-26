import { PaginationParamsDto } from 'src/_types/pagination-params.dto';

export class SchoolNotificationPaginationParamsDto extends PaginationParamsDto<
  | 'id'
  | 'createdAt'
  | 'updatedAt'
  | 'title'
  | 'desc'
  | 'date'
  | 'schoolSectionId'
  | 'receiverId'
> {}
