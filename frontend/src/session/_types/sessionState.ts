import { RoleEnum } from "@/auth/_enums/role.enum";
import { BranchInfoDto } from "../../auth/_types/userInfo/branchInfo.dto";
import { CollaboratorInfoDto } from "../../auth/_types/userInfo/collaboratorInfo.dto";
import { CompanyInfoDto } from "@/auth/_types/userInfo/companyInfo.dto";

export interface SessionState {
  role?: RoleEnum;
  collaboratorsList?: Array<CollaboratorInfoDto>;
  collaborator?: CollaboratorInfoDto | undefined;
  company?: CompanyInfoDto | undefined;
  branch?: BranchInfoDto | undefined;
}
