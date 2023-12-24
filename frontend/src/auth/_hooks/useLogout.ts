"use client";

import { useCallback, useContext } from "react";
import { AuthContext } from "../_contexts/authContext";
import { AuthActionTypeEnum } from "../_enums/authActionType.enum";
import { AuthStorageKeyEnum } from "../_enums/authStorageKey.enum";
import { useResetSession } from "@/session/_hooks/useResetSession";

export function useLogout(): () => void {
  const resetSession = useResetSession();
  const { dispatch } = useContext(AuthContext);
  const func = useCallback(() => {
    localStorage.removeItem(AuthStorageKeyEnum.AUTH_TOKEN);
    if (dispatch) {
      resetSession();
      dispatch({
        type: AuthActionTypeEnum.LOGOUT,
        payload: {},
      });
    }
  }, [dispatch, resetSession]);
  return func;
}
