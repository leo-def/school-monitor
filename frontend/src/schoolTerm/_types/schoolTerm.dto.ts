import { EntityDto } from "@/commons/api/_types/entity.dto";

export interface SchoolTermDto extends EntityDto {
  title: string;
  companyId: string;
  branchId: string;
  start: Date;
  end: Date;
}
