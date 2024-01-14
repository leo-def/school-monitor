import { PaginationResponse } from 'src/pagination/_types/response';
import { SchoolEventPaginationParamsDto } from './school-event-pagination-params.dto';
import { SchoolEventDto } from './school-event.dto';

export class SchoolEventPaginationResponseDto extends PaginationResponse<
  SchoolEventDto,
  SchoolEventPaginationParamsDto
> {}
