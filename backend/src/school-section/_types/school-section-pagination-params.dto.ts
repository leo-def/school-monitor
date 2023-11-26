import { PaginationParamsDto } from 'src/_types/pagination-params.dto';

export class SchoolSectionPaginationParamsDto extends PaginationParamsDto<
  | 'id'
  | 'schoolSubjectId'
  | 'schoolClassId'
  | 'schoolTermId'
  | 'professorId'
  | 'gradeId'
> {}
