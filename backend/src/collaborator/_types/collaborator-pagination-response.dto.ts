import { PaginationResponse } from 'src/pagination/_types/response';
import { CollaboratorPaginationParamsDto } from './collaborator-pagination-params.dto';
import { CollaboratorDto } from './collaborator.dto';

export class CollaboratorPaginationResponseDto extends PaginationResponse<
  CollaboratorDto,
  CollaboratorPaginationParamsDto
> {}
