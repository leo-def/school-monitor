import { EntityDto } from "@/commons/api/_types/entity.dto";
import { CollaboratorRole } from "../_enums/collaboratorRole";

export interface CollaboratorDto extends EntityDto {
  title: string;
  accountId: string;
  companyId: string;
  branchId: string;
  role: CollaboratorRole;
}
