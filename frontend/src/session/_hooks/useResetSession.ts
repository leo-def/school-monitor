"use client";

import { useCallback, useContext } from "react";
import { SessionContext } from "../_contexts/sessionContext";
import { SessionActionTypeEnum } from "../_enums/sessionActionType.enum";

export function useResetSession(): () => void {
  const { dispatch } = useContext(SessionContext);

  const func = useCallback(() => {
    if (dispatch) {
      dispatch({
        type: SessionActionTypeEnum.RESET,
        payload: {},
      });
    }
  }, [dispatch]);
  return func;
}
