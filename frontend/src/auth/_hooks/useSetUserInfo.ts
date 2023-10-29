import { useContext } from "react";
import { AuthContext } from "../_contexts/authContext";
import { AuthActionTypeEnum } from "../_enums/authActionType.enum";
import { UserInfo } from "../_types/userInfo";

export function useSetUserInfo(): (user: UserInfo) => void {
  const { dispatch } = useContext(AuthContext);
  return (user: UserInfo) => {
    if (dispatch) {
      dispatch({
        type: AuthActionTypeEnum.AUTH,
        payload: { user },
      });
    }
  };
}
