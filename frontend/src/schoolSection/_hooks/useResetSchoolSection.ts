"use client";

import { useCallback, useContext } from "react";
import { SchoolSectionActionTypeEnum } from "../_enums/schoolSectionActionType.enum";
import { SchoolSectionContext } from "../_contexts/schoolSectionContext";

export function useResetSchoolSection(): () => void {
  const { dispatch } = useContext(SchoolSectionContext);

  const func = useCallback(() => {
    if (dispatch) {
      dispatch({
        type: SchoolSectionActionTypeEnum.RESET,
        payload: {},
      });
    }
  }, [dispatch]);
  return func;
}
