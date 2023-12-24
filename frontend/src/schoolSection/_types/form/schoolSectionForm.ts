import { CollaboratorDto } from "@/collaborator/_types/collaborator.dto";
import { AutocompleteFieldData } from "@/commons/api/_types/form/autocompleteFieldData";
import { SchoolClassDto } from "@/schoolClass/_types/schoolClass.dto";
import { SchoolSubjectDto } from "@/schoolSubject/_types/schoolSubject.dto";
import { SchoolTermDto } from "@/schoolTerm/_types/schoolTerm.dto";

export interface SchoolSectionForm {
  professor: AutocompleteFieldData<CollaboratorDto>;
  schoolClass: AutocompleteFieldData<SchoolClassDto>;
  schoolSubject: AutocompleteFieldData<SchoolSubjectDto>;
  schoolTerm: AutocompleteFieldData<SchoolTermDto>;
}
