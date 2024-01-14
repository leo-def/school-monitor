import { PaginationResponse } from 'src/pagination/_types/response';
import { SchoolAbsencePaginationParamsDto } from './school-absence-pagination-params.dto';
import { SchoolAbsenceDto } from './school-absence.dto';

export class SchoolAbsencePaginationResponseDto extends PaginationResponse<
  SchoolAbsenceDto,
  SchoolAbsencePaginationParamsDto
> {}
