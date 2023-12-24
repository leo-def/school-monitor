import { BranchInfoDto } from "./branchInfo.dto";

export interface CompanyInfoDto {
  id: string;
  title: string;
  branchs: BranchInfoDto[];
}
