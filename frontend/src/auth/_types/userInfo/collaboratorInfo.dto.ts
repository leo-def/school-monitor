import { BranchInfoDto } from "./branchInfo.dto";
import { CompanyInfoDto } from "./companyInfo.dto";

export interface CollaboratorInfoDto {
  id: string;
  branch: BranchInfoDto;
  company: CompanyInfoDto;
  role: string;
}
