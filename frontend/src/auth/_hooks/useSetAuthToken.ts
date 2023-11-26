import { useContext } from "react";
import { AuthContext } from "../_contexts/authContext";
import { AuthActionTypeEnum } from "../_enums/authActionType.enum";

export function useSetAuthToken(): (token: string) => void {
  const { dispatch } = useContext(AuthContext);
  return (token: string) => {
    console.log("useSetAuthToken", { token });
    if (dispatch) {
      dispatch({
        type: AuthActionTypeEnum.AUTH,
        payload: { token },
      });
    }
  };
}
