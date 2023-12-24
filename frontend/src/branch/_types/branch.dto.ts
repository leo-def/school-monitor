import { EntityDto } from "@/commons/api/_types/entity.dto";

export interface BranchDto extends EntityDto {
  title: string;
  companyId: string;
}
