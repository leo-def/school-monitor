import { PaginationParamsDto } from 'src/_types/pagination-params.dto';

export class SchoolAbsencePaginationParamsDto extends PaginationParamsDto<
  | 'id'
  | 'createdAt'
  | 'updatedAt'
  | 'schoolSectionId'
  | 'desc'
  | 'hasJustification'
  | 'justification'
  | 'start'
  | 'end'
> {}
