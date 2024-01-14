import { PaginationResponse } from 'src/pagination/_types/response';
import { GradeTemplatePaginationParamsDto } from './grade-template-pagination-params.dto';
import { GradeTemplateDto } from './grade-template.dto';

export class GradeTemplatePaginationResponseDto extends PaginationResponse<
  GradeTemplateDto,
  GradeTemplatePaginationParamsDto
> {}
