import { PaginationResponse } from 'src/pagination/_types/response';
import { SchoolGradePaginationParamsDto } from './school-grade-pagination-params.dto';
import { SchoolGradeDto } from './school-grade.dto';

export class SchoolGradePaginationResponseDto extends PaginationResponse<
  SchoolGradeDto,
  SchoolGradePaginationParamsDto
> {}
