import { EntityDto } from "@/commons/api/_types/entity.dto";

export interface SchoolSectionDto extends EntityDto {
  companyId: string;
  branchId: string;
  schoolSubjectId: string;
  schoolClassId: string;
  schoolTermId: string;
  professorId: string;
}
