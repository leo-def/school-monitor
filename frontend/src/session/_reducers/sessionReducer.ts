import { initialState } from "../_constants/initialState";
import { SessionActionTypeEnum } from "../_enums/sessionActionType.enum";
import { SessionStateUtils } from "../_services/sessionStateUtils";
import { SessionSetIdPayload } from "../_types/payloads/sessionSetIdPayload";
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
    case SessionActionTypeEnum.SET_COMPANY_ID:
      return SessionStateUtils.setCompanyId(
        (action.payload as SessionSetIdPayload).id,
        state
      );
    case SessionActionTypeEnum.SET_BRANCH_ID:
      return SessionStateUtils.setBranchId(
        (action.payload as SessionSetIdPayload).id,
        state
      );
    default:
      return state;
  }
};
