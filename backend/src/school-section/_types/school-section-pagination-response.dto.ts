import { PaginationResponse } from 'src/pagination/_types/response';
import { SchoolSectionPaginationParamsDto } from './school-section-pagination-params.dto';
import { SchoolSectionDto } from './school-section.dto';

export class SchoolSectionPaginationResponseDto extends PaginationResponse<
  SchoolSectionDto,
  SchoolSectionPaginationParamsDto
> {}
