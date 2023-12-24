"use client";

import { useCallback, useContext } from "react";
import { SchoolSectionActionTypeEnum } from "../_enums/schoolSectionActionType.enum";
import { SchoolSectionContext } from "../_contexts/schoolSectionContext";
import { SchoolTermDto } from "@/schoolTerm/_types/schoolTerm.dto";

export function useSetSchoolSectionSchoolTerm(): (
  schoolTerm?: SchoolTermDto
) => void {
  const { dispatch } = useContext(SchoolSectionContext);

  const func = useCallback(
    (schoolTerm?: SchoolTermDto) => {
      if (dispatch) {
        dispatch({
          type: SchoolSectionActionTypeEnum.SET_SCHOOL_TERM,
          payload: { schoolTerm },
        });
      }
    },
    [dispatch]
  );
  return func;
}
