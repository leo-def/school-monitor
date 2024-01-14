import { PaginationResponse } from 'src/pagination/_types/response';
import { BranchPaginationParamsDto } from './branch-pagination-params.dto';
import { BranchDto } from './branch.dto';

export class BranchPaginationResponseDto extends PaginationResponse<
  BranchDto,
  BranchPaginationParamsDto
> {}
