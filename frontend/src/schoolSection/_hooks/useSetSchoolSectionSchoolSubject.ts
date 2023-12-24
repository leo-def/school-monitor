"use client";

import { useCallback, useContext } from "react";
import { SchoolSectionActionTypeEnum } from "../_enums/schoolSectionActionType.enum";
import { SchoolSectionContext } from "../_contexts/schoolSectionContext";
import { SchoolSubjectDto } from "@/schoolSubject/_types/schoolSubject.dto";

export function useSetSchoolSectionSchoolSubject(): (
  schoolSubject?: SchoolSubjectDto
) => void {
  const { dispatch } = useContext(SchoolSectionContext);

  const func = useCallback(
    (schoolSubject?: SchoolSubjectDto) => {
      if (dispatch) {
        dispatch({
          type: SchoolSectionActionTypeEnum.SET_SCHOOL_SUBJECT,
          payload: { schoolSubject },
        });
      }
    },
    [dispatch]
  );
  return func;
}
