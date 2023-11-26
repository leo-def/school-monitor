import { AuthActionTypeEnum } from "../_enums/authActionType.enum";
import { AuthAction } from "../_types/authAction";
import { AuthState } from "../_types/authState";

export const authReducer = (
  state: AuthState,
  action: AuthAction
): AuthState => {
  switch (action.type) {
    case AuthActionTypeEnum.AUTH:
      return { ...state, token: action.payload.token } as AuthState;
    case AuthActionTypeEnum.LOAD_AUTH:
      return {
        ...state,
        loaded: true,
        token: action.payload.token,
      } as AuthState;
    case AuthActionTypeEnum.LOGOUT:
      return { ...state, token: undefined } as AuthState;
    default:
      return state;
  }
};
