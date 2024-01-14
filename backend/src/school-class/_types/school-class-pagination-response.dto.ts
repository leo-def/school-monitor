import { PaginationResponse } from 'src/pagination/_types/response';
import { SchoolClassPaginationParamsDto } from './school-class-pagination-params.dto';
import { SchoolClassDto } from './school-class.dto';

export class SchoolClassPaginationResponseDto extends PaginationResponse<
  SchoolClassDto,
  SchoolClassPaginationParamsDto
> {}
