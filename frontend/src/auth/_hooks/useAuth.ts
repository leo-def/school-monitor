"use client";

import { useCallback, useContext } from "react";
import { AuthContext } from "../_contexts/authContext";
import { AuthActionTypeEnum } from "../_enums/authActionType.enum";
import { JWTUtils } from "../_services/jwtUtils";
import { useSetSessionUserInfo } from "@/session/_hooks/useSetSessionUserInfo";
import { UserInfoDto } from "../_types/userInfo/userInfo.dto";
import { AuthStorageKeyEnum } from "../_enums/authStorageKey.enum";

export function useAuth(): (token: string) => void {
  const { dispatch } = useContext(AuthContext);
  const setUserInfo = useSetSessionUserInfo();
  const func = useCallback(
    (token: string) => {
      if (dispatch) {
        const userInfo = JWTUtils.resolveJWTToken<UserInfoDto>(token)?.payload;
        if (userInfo) {
          setUserInfo(userInfo);
        }
        dispatch({
          type: AuthActionTypeEnum.AUTH,
          payload: { token },
        });
        localStorage.setItem(AuthStorageKeyEnum.AUTH_TOKEN, token);
      }
    },
    [dispatch, setUserInfo]
  );
  return func;
}
