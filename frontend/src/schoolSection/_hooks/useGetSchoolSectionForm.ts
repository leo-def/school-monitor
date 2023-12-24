"use client";

import { useGetSession } from "@/session/_hooks/useGetSession";
import { useGetSchoolSectionState } from "./useGetSchoolSectionState";
import { useSetSchoolSectionProfessor } from "./useSetSchoolSectionProfessor";
import { useSetSchoolSectionSchoolClass } from "./useSetSchoolSectionSchoolClass";
import { useSetSchoolSectionSchoolSubject } from "./useSetSchoolSectionSchoolSubject";
import { useSetSchoolSectionSchoolTerm } from "./useSetSchoolSectionSchoolTerm";
import { SchoolSectionForm } from "../_types/form/schoolSectionForm";
import { CollaboratorDto } from "@/collaborator/_types/collaborator.dto";
import { SchoolClassDto } from "@/schoolClass/_types/schoolClass.dto";
import { SchoolSubjectDto } from "@/schoolSubject/_types/schoolSubject.dto";
import { SchoolTermDto } from "@/schoolTerm/_types/schoolTerm.dto";
import { CollaboratorRole } from "@/collaborator/_enums/collaboratorRole";

export function useGetSchoolSectionForm(): SchoolSectionForm | undefined {
  const sessionState = useGetSession();
  const schoolSection = useGetSchoolSectionState();
  const setProfessor = useSetSchoolSectionProfessor();
  const setSchoolClass = useSetSchoolSectionSchoolClass();
  const setSchoolSubject = useSetSchoolSectionSchoolSubject();
  const setSchoolTerm = useSetSchoolSectionSchoolTerm();
  if (!sessionState) {
    return undefined;
  }
  const fixedProfessor =
    sessionState?.collaborator?.role === CollaboratorRole.PROFESSOR
      ? sessionState?.collaborator
      : undefined;
  return {
    professor: {
      value: fixedProfessor?.id ?? schoolSection?.params.professor?.id,
      object: schoolSection?.params.professor,
      disabled: false,
      hidden: !!fixedProfessor,
      onObjectChange: (value: CollaboratorDto) => setProfessor(value),
    },
    schoolClass: {
      value: schoolSection?.params.schoolClass?.id,
      object: schoolSection?.params.schoolClass,
      disabled: false,
      hidden: false,
      onObjectChange: (value: SchoolClassDto) => setSchoolClass(value),
    },
    schoolSubject: {
      value: schoolSection?.params.schoolSubject?.id,
      object: schoolSection?.params.schoolSubject,
      disabled: false,
      hidden: false,
      onObjectChange: (value: SchoolSubjectDto) => setSchoolSubject(value),
    },
    schoolTerm: {
      value: schoolSection?.params.schoolTerm?.id,
      object: schoolSection?.params.schoolTerm,
      disabled: false,
      hidden: false,
      onObjectChange: (value: SchoolTermDto) => setSchoolTerm(value),
    },
  } as SchoolSectionForm;
}
