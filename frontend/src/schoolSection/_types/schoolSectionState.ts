import { CollaboratorDto } from "@/collaborator/_types/collaborator.dto";
import { SchoolClassDto } from "@/schoolClass/_types/schoolClass.dto";
import { SchoolSubjectDto } from "@/schoolSubject/_types/schoolSubject.dto";
import { SchoolTermDto } from "@/schoolTerm/_types/schoolTerm.dto";
import { SchoolSectionDto } from "./schoolSection.dto";

export interface SchoolSectionState {
  schoolSection: SchoolSectionDto | undefined;
  params: SchoolSectionStateParams;
}

export interface SchoolSectionStateParams {
  professor: CollaboratorDto | undefined;
  schoolClass: SchoolClassDto | undefined;
  schoolSubject: SchoolSubjectDto | undefined;
  schoolTerm: SchoolTermDto | undefined;
}
