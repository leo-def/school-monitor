"use client";

import { useGetSession } from "@/session/_hooks/useGetSession";
import { useGetSchoolSectionState } from "./useGetSchoolSectionState";
import { SchoolSectionParams } from "../_types/schoolSectionParams";

export function useGetSchoolSectionParams(): SchoolSectionParams | undefined {
  const sessionState = useGetSession();
  const schoolSection = useGetSchoolSectionState();
  if (!sessionState || !schoolSection) {
    return undefined;
  }
  return {
    companyId: sessionState?.collaborator?.company?.id,
    branchId: sessionState?.branch?.id,
    schoolSubjectId: schoolSection?.params?.schoolSubject?.id,
    schoolClassId: schoolSection?.params?.schoolClass?.id,
    schoolTermId: schoolSection?.params?.schoolTerm?.id,
    professorId: schoolSection?.params?.professor?.id,
  };
}
