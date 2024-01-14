import { PaginationResponse } from 'src/pagination/_types/response';
import { SchoolNotificationPaginationParamsDto } from './school-notification-pagination-params.dto';
import { SchoolNotificationDto } from './school-notification.dto';

export class SchoolNotificationPaginationResponseDto extends PaginationResponse<
  SchoolNotificationDto,
  SchoolNotificationPaginationParamsDto
> {}
