"use client";

import { useGetSession } from "@/session/_hooks/useGetSession";
import { useGetSchoolSectionState } from "./useGetSchoolSectionState";
import { useSetSchoolSectionProfessor } from "./useSetSchoolSectionProfessor";
import { useSetSchoolSectionSchoolClass } from "./useSetSchoolSectionSchoolClass";
import { useSetSchoolSectionSchoolSubject } from "./useSetSchoolSectionSchoolSubject";
import { useSetSchoolSectionSchoolTerm } from "./useSetSchoolSectionSchoolTerm";
import { SchoolSectionForm } from "../_types/form/schoolSectionForm";
import { SchoolSectionStateUtils } from "../_services/schoolSectionStateUtils";

export function useGetSchoolSectionForm(): SchoolSectionForm | undefined {
  const sessionState = useGetSession();
  const schoolSectionState = useGetSchoolSectionState();

  const setProfessor = useSetSchoolSectionProfessor();
  const setSchoolClass = useSetSchoolSectionSchoolClass();
  const setSchoolSubject = useSetSchoolSectionSchoolSubject();
  const setSchoolTerm = useSetSchoolSectionSchoolTerm();
  if (!sessionState) {
    return undefined;
  }
  return SchoolSectionStateUtils.toSectionForm(
    sessionState,
    schoolSectionState,
    {
      professor: setProfessor,
      schoolClass: setSchoolClass,
      schoolSubject: setSchoolSubject,
      schoolTerm: setSchoolTerm,
    }
  );
}
