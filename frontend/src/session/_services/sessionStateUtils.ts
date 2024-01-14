import { BranchInfoDto } from "@/auth/_types/userInfo/branchInfo.dto";
import { CollaboratorInfoDto } from "../../auth/_types/userInfo/collaboratorInfo.dto";
import { UserInfoDto } from "../../auth/_types/userInfo/userInfo.dto";
import { SessionState } from "../_types/sessionState";
import { SessionForm } from "../_types/form/sessionForm";
import { AutocompleteFieldData } from "../../commons/api/_types/form/autocompleteFieldData";
import { CompanyDto } from "@/company/_types/company.dto";
import { BranchDto } from "@/branch/_types/branch.dto";
import { RoleEnum } from "@/auth/_enums/role.enum";
import { CompanyInfoDto } from "@/auth/_types/userInfo/companyInfo.dto";

export class SessionStateUtils {
  static toSectionForm(
    sessionState: SessionState,
    onChange?: {
      branch: (id: BranchInfoDto) => void;
      company: (id: CompanyInfoDto) => void;
    }
  ) {
    const { role, collaborator, branch, company } = sessionState;

    const collaboratorsList =
      role === RoleEnum.CUSTOMER && sessionState.collaboratorsList
        ? sessionState.collaboratorsList
        : undefined;

    const companyOptions = collaboratorsList
      ? collaboratorsList.map((collaborator) => collaborator.company.id)
      : undefined;
    const companyDisabled = collaboratorsList && collaboratorsList.length <= 1;

    const defaultBranch = collaborator?.branch;
    const branchDisabled = !!defaultBranch;

    const sectionForm = {
      company: {
        value: company,
        options: companyOptions,
        disabled: companyDisabled,
        onChange: onChange?.company,
      } as AutocompleteFieldData<CompanyDto>,
      branch: {
        value: branch,
        disabled: branchDisabled,
        onChange: onChange?.branch,
      } as AutocompleteFieldData<BranchDto>,
    } as SessionForm;
    return sectionForm;
  }

  static setUserInfo(userInfo: UserInfoDto) {
    const { collaboratorsList, role } = userInfo;
    const collaborator = collaboratorsList ? collaboratorsList[0] : undefined;
    const state = {
      role,
      collaboratorsList,
    } as SessionState;
    return SessionStateUtils.setCollaboratorInfo(collaborator, state);
  }

  static setCollaboratorInfo(
    collaborator: CollaboratorInfoDto | undefined,
    sessionState: SessionState
  ) {
    const company = collaborator?.company;
    const branch = collaborator?.branch;
    return {
      ...sessionState,
      collaborator,
      company,
      branch,
    } as SessionState;
  }

  static setCompanyInfo(
    company: CompanyInfoDto | undefined,
    sessionState: SessionState
  ) {
    const collaborator =
      company?.id && sessionState.collaboratorsList
        ? sessionState.collaboratorsList?.find(
            (collaborator) => collaborator.company.id === company?.id
          )
        : undefined;
    return {
      ...sessionState,
      company,
      branch: undefined,
      collaborator,
    } as SessionState;
  }

  static setBranchInfo(
    branch: BranchInfoDto | undefined,
    sessionState: SessionState
  ) {
    return {
      ...sessionState,
      branch,
    };
  }
}
