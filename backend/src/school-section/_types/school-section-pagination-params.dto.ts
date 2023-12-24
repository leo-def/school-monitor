import { PaginationParamsDto } from 'src/_types/pagination-params.dto';

export class SchoolSectionPaginationParamsDto extends PaginationParamsDto<
  | 'id'
  | 'companyId'
  | 'branchId'
  | 'schoolSubjectId'
  | 'schoolClassId'
  | 'schoolTermId'
  | 'professorId'
> {}
