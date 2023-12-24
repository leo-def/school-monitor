"use client";

import { useCallback, useContext } from "react";
import { SessionContext } from "../_contexts/sessionContext";
import { SessionActionTypeEnum } from "../_enums/sessionActionType.enum";

export function useSetSessionCompanyId(): (id?: string) => void {
  const { dispatch } = useContext(SessionContext);

  const func = useCallback(
    (id?: string) => {
      if (dispatch) {
        dispatch({
          type: SessionActionTypeEnum.SET_COMPANY_ID,
          payload: { id },
        });
      }
    },
    [dispatch]
  );
  return func;
}
