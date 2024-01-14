import { initialState } from "../_constants/initialState";
import { SessionActionTypeEnum } from "../_enums/sessionActionType.enum";
import { SessionStateUtils } from "../_services/sessionStateUtils";
import { SessionSetBranchInfoPayload } from "../_types/payloads/sessionSetBranchInfoPayload";
import { SessionSetCompanyInfoPayload } from "../_types/payloads/sessionSetCompanyInfoPayload";
import { SessionSetUserInfoPayload } from "../_types/payloads/sessionSetUserInfoPayload";
import { SessionAction } from "../_types/sessionAction";
import { SessionState } from "../_types/sessionState";

export const sessionReducer = (
  state: SessionState,
  action: SessionAction
): SessionState => {
  switch (action.type) {
    case SessionActionTypeEnum.SET_USER_INFO:
      return SessionStateUtils.setUserInfo(
        (action.payload as SessionSetUserInfoPayload).userInfo
      );
    case SessionActionTypeEnum.RESET:
      return initialState;
    case SessionActionTypeEnum.SET_COMPANY:
      return SessionStateUtils.setCompanyInfo(
        (action.payload as SessionSetCompanyInfoPayload).company,
        state
      );
    case SessionActionTypeEnum.SET_BRANCH:
      return SessionStateUtils.setBranchInfo(
        (action.payload as SessionSetBranchInfoPayload).branch,
        state
      );
    default:
      return state;
  }
};
