import { PaginationResponse } from 'src/pagination/_types/response';
import { SchoolTermPaginationParamsDto } from './school-term-pagination-params.dto';
import { SchoolTermDto } from './school-term.dto';

export class SchoolTermPaginationResponseDto extends PaginationResponse<
  SchoolTermDto,
  SchoolTermPaginationParamsDto
> {}
