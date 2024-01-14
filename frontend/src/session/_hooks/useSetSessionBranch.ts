"use client";

import { useCallback, useContext } from "react";
import { BranchInfoDto } from "@/auth/_types/userInfo/branchInfo.dto";
import { SessionContext } from "../_contexts/sessionContext";
import { SessionActionTypeEnum } from "../_enums/sessionActionType.enum";

export function useSetSessionBranch(): (branch?: BranchInfoDto) => void {
  const { dispatch } = useContext(SessionContext);

  const func = useCallback(
    (branch?: BranchInfoDto) => {
      if (dispatch) {
        dispatch({
          type: SessionActionTypeEnum.SET_BRANCH,
          payload: { branch },
        });
      }
    },
    [dispatch]
  );
  return func;
}
