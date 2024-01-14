import { PaginationResponse } from 'src/pagination/_types/response';
import { CompanyPaginationParamsDto } from './company-pagination-params.dto';
import { CompanyDto } from './company.dto';

export class CompanyPaginationResponseDto extends PaginationResponse<
  CompanyDto,
  CompanyPaginationParamsDto
> {}
