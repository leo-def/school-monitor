import { BranchInfoDto } from "@/auth/_types/userInfo/branchInfo.dto";
import { CollaboratorInfoDto } from "../../auth/_types/userInfo/collaboratorInfo.dto";
import { UserInfoDto } from "../../auth/_types/userInfo/userInfo.dto";
import { SessionState } from "../_types/sessionState";
import { SessionForm } from "../_types/form/sessionForm";
import { AutocompleteFieldData } from "../../commons/api/_types/form/autocompleteFieldData";
import { CompanyDto } from "@/company/_types/company.dto";
import { BranchDto } from "@/branch/_types/branch.dto";
import { RoleEnum } from "@/auth/_enums/role.enum";

export class SessionStateUtils {
  static toSectionForm(
    sessionState: SessionState,
    onChange?: {
      branch: (id: string) => void;
      company: (id: string) => void;
    }
  ) {
    const { role, collaborator, branch  } = sessionState;
    const collaboratorsList = role === RoleEnum.CUSTOMER && sessionState.collaboratorsList ? sessionState.collaboratorsList : undefined
    const branchList = role === RoleEnum.CUSTOMER && collaborator?.company?.branchs ? collaborator?.company.branchs : undefined;
    const sectionForm = {
      company: {
        options:  collaboratorsList ? collaboratorsList.map( (collaborator) => collaborator.company.id) : undefined,
        disabled: collaboratorsList && collaboratorsList.length <= 1,
        onChange: onChange?.company,
      } as AutocompleteFieldData<CompanyDto>,
      branch: {
        value: branch?.id,
        options: branchList ? branchList.map((branch) => branch.id) : undefined,
        disabled: !!collaborator?.branch || (branchList && branchList.length <= 1),
        onChange: onChange?.branch,
      } as AutocompleteFieldData<BranchDto>,
    } as SessionForm;
    return sectionForm
  }

  static setUserInfo(userInfo: UserInfoDto) {
    const { collaboratorsList, role } = userInfo;
    const collaborator = collaboratorsList ? collaboratorsList[0] : undefined;
    const state = {
      role, 
      collaboratorsList,
    } as SessionState;
    return SessionStateUtils.setCollaborator(collaborator, state);
  }

  static setCollaborator(
    collaborator: CollaboratorInfoDto | undefined,
    sessionState: SessionState
  ) {
    const branch = collaborator?.branch ?? collaborator?.company.branchs[0];
    const state = {
      ...sessionState,
      collaborator,
    } as SessionState;
    return SessionStateUtils.setBranch(branch, state);
  }

  static setBranch(
    branch: BranchInfoDto | undefined,
    sessionState: SessionState
  ) {
    return {
      ...sessionState,
      branch,
    };
  }

  static setCompanyId(
    companyId: string | undefined,
    sessionState: SessionState
  ) {
    const collaborator = companyId && sessionState.collaboratorsList
      ? sessionState.collaboratorsList.find(
          (collaborator) => collaborator.company.id === companyId
        )
      : undefined;
    return SessionStateUtils.setCollaborator(collaborator, sessionState);
  }

  static setBranchId(branchId: string | undefined, sessionState: SessionState) {
    const branch = branchId
      ? (sessionState.collaborator?.company?.branchs ?? []).find(
          (branch) => branch.id === branchId
        )
      : undefined;
    return SessionStateUtils.setBranch(branch, sessionState);
  }
}
