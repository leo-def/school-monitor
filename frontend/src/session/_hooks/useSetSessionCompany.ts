"use client";

import { useCallback, useContext } from "react";
import { CompanyInfoDto } from "@/auth/_types/userInfo/companyInfo.dto";
import { SessionContext } from "../_contexts/sessionContext";
import { SessionActionTypeEnum } from "../_enums/sessionActionType.enum";

export function useSetSessionCompany(): (company?: CompanyInfoDto) => void {
  const { dispatch } = useContext(SessionContext);

  const func = useCallback(
    (company?: CompanyInfoDto) => {
      if (dispatch) {
        dispatch({
          type: SessionActionTypeEnum.SET_COMPANY,
          payload: { company },
        });
      }
    },
    [dispatch]
  );
  return func;
}
