import { PaginationResponse } from 'src/pagination/_types/response';
import { SchoolProjectPaginationParamsDto } from './school-project-pagination-params.dto';
import { SchoolProjectDto } from './school-project.dto';

export class SchoolProjectPaginationResponseDto extends PaginationResponse<
  SchoolProjectDto,
  SchoolProjectPaginationParamsDto
> {}
