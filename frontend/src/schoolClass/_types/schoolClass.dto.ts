import { EntityDto } from "@/commons/api/_types/entity.dto";

export interface SchoolClassDto extends EntityDto {
  title: string;
  desc: string;
  companyId: string;
  branchId: string;
}
