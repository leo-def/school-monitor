"use client";

import { useCallback, useContext } from "react";
import { useRouter } from "next/navigation";
import { useResetSession } from "@/session/_hooks/useResetSession";
import { AuthContext } from "../_contexts/authContext";
import { AuthActionTypeEnum } from "../_enums/authActionType.enum";
import { AuthStorageKeyEnum } from "../_enums/authStorageKey.enum";

export function useLogout(): () => void {
  const resetSession = useResetSession();
  const router = useRouter();
  const { dispatch } = useContext(AuthContext);
  const func = useCallback(() => {
    localStorage.removeItem(AuthStorageKeyEnum.AUTH_TOKEN);
    if (dispatch) {
      dispatch({
        type: AuthActionTypeEnum.LOGOUT,
        payload: {},
      });
      resetSession();
      router.push("/");
    }
  }, [dispatch, resetSession, router]);
  return func;
}
