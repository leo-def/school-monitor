import { BranchInfoDto } from "../../auth/_types/userInfo/branchInfo.dto";
import { CollaboratorInfoDto } from "../../auth/_types/userInfo/collaboratorInfo.dto";

export interface SessionState {
  collaboratorsList: Array<CollaboratorInfoDto>;
  collaborator: CollaboratorInfoDto | undefined;
  branch: BranchInfoDto | undefined;
}
