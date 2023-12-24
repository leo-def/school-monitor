"use client";

import { useCallback, useContext } from "react";
import { SchoolSectionActionTypeEnum } from "../_enums/schoolSectionActionType.enum";
import { SchoolSectionContext } from "../_contexts/schoolSectionContext";
import { SchoolSectionDto } from "@/schoolSection/_types/schoolSection.dto";

export function useSetSchoolSections(): (
  schoolSections?: Array<SchoolSectionDto>
) => void {
  const { dispatch } = useContext(SchoolSectionContext);

  const func = useCallback(
    (schoolSections?: Array<SchoolSectionDto>) => {
      if (dispatch) {
        dispatch({
          type: SchoolSectionActionTypeEnum.SET_SCHOOL_SECTIONS,
          payload: { schoolSections },
        });
      }
    },
    [dispatch]
  );
  return func;
}
