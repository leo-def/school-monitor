import { AuthActionTypeEnum } from "../_enums/authActionType.enum";
import { AuthAction } from "../_types/authAction";
import { AuthState } from "../_types/authState";
import { AuthPayload } from "../_types/payloads/authPayload";

export const authReducer = (
  state: AuthState,
  action: AuthAction
): AuthState => {
  const { token, loaded } = (action.payload as AuthPayload) ?? {};
  switch (action.type) {
    case AuthActionTypeEnum.AUTH:
      return {
        ...state,
        loaded,
        token,
      } as AuthState;
    case AuthActionTypeEnum.LOGOUT:
      return {
        ...state,
        token: undefined,
        userInfo: undefined,
      } as AuthState;
    default:
      return state;
  }
};
