"use client";

import { useCallback, useContext } from "react";
import { SchoolSectionActionTypeEnum } from "../_enums/schoolSectionActionType.enum";
import { SchoolSectionContext } from "../_contexts/schoolSectionContext";
import { SchoolClassDto } from "@/schoolClass/_types/schoolClass.dto";

export function useSetSchoolSectionSchoolClass(): (
  schoolClass?: SchoolClassDto
) => void {
  const { dispatch } = useContext(SchoolSectionContext);

  const func = useCallback(
    (schoolClass?: SchoolClassDto) => {
      if (dispatch) {
        dispatch({
          type: SchoolSectionActionTypeEnum.SET_SCHOOL_CLASS,
          payload: { schoolClass },
        });
      }
    },
    [dispatch]
  );
  return func;
}
