import { PaginationResponse } from 'src/pagination/_types/response';
import { SchoolSubjectPaginationParamsDto } from './school-subject-pagination-params.dto';
import { SchoolSubjectDto } from './school-subject.dto';

export class SchoolSubjectPaginationResponseDto extends PaginationResponse<
  SchoolSubjectDto,
  SchoolSubjectPaginationParamsDto
> {}
