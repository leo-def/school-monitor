import { PaginationParamsDto } from 'src/_types/pagination-params.dto';

export class CompanyPaginationParamsDto extends PaginationParamsDto<
  'id' | 'createdAt' | 'updatedAt' | 'title'
> {}
