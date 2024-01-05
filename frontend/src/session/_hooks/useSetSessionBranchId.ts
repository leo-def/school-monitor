"use client";

import { useCallback, useContext } from "react";
import { SessionContext } from "../_contexts/sessionContext";
import { SessionActionTypeEnum } from "../_enums/sessionActionType.enum";

export function useSetSessionBranchId(): (id?: string) => void {
  const { dispatch } = useContext(SessionContext);

  const func = useCallback(
    (id?: string) => {
      console.log('useSetSessionBranchId')
      if (dispatch) {
        dispatch({
          type: SessionActionTypeEnum.SET_BRANCH_ID,
          payload: { id },
        });
      }
    },
    [dispatch]
  );
  return func;
}
