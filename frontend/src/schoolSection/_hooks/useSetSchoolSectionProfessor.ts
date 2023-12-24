"use client";

import { useCallback, useContext } from "react";
import { SchoolSectionActionTypeEnum } from "../_enums/schoolSectionActionType.enum";
import { SchoolSectionContext } from "../_contexts/schoolSectionContext";
import { CollaboratorDto } from "@/collaborator/_types/collaborator.dto";

export function useSetSchoolSectionProfessor(): (
  professor?: CollaboratorDto
) => void {
  const { dispatch } = useContext(SchoolSectionContext);

  const func = useCallback(
    (professor?: CollaboratorDto) => {
      if (dispatch) {
        dispatch({
          type: SchoolSectionActionTypeEnum.SET_PROFESSOR,
          payload: { professor },
        });
      }
    },
    [dispatch]
  );
  return func;
}
