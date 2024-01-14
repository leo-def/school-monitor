import { PaginationResponse } from 'src/pagination/_types/response';
import { SchoolAppraisalPaginationParamsDto } from './school-appraisal-pagination-params.dto';
import { SchoolAppraisalDto } from './school-appraisal.dto';

export class SchoolAppraisalPaginationResponseDto extends PaginationResponse<
  SchoolAppraisalDto,
  SchoolAppraisalPaginationParamsDto
> {}
