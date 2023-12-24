"use client";

import { useCallback, useContext } from "react";
import { SessionContext } from "../_contexts/sessionContext";
import { SessionActionTypeEnum } from "../_enums/sessionActionType.enum";
import { UserInfoDto } from "@/auth/_types/userInfo/userInfo.dto";

export function useSetSessionUserInfo(): (userInfo: UserInfoDto) => void {
  const { dispatch } = useContext(SessionContext);

  const func = useCallback(
    (userInfo: UserInfoDto) => {
      if (dispatch) {
        dispatch({
          type: SessionActionTypeEnum.SET_USER_INFO,
          payload: { userInfo },
        });
      }
    },
    [dispatch]
  );
  return func;
}
