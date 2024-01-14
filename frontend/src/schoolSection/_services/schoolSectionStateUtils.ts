import { RoleEnum } from "@/auth/_enums/role.enum";
import { AutocompleteFieldData } from "@/commons/api/_types/form/autocompleteFieldData";
import { SessionState } from "@/session/_types/sessionState";
import { CollaboratorDto } from "@/collaborator/_types/collaborator.dto";
import { SchoolClassDto } from "@/schoolClass/_types/schoolClass.dto";
import { SchoolSubjectDto } from "@/schoolSubject/_types/schoolSubject.dto";
import { SchoolTermDto } from "@/schoolTerm/_types/schoolTerm.dto";
import { SchoolSectionState } from "../_types/schoolSectionState";
import { SchoolSectionForm } from "../_types/form/schoolSectionForm";

export class SchoolSectionStateUtils {
  static toSectionForm(
    sessionState: SessionState,
    schoolSectionState?: SchoolSectionState,
    onChange?: {
      professor: (id: CollaboratorDto) => void;
      schoolClass: (id: SchoolClassDto) => void;
      schoolSubject: (id: SchoolSubjectDto) => void;
      schoolTerm: (id: SchoolTermDto) => void;
    }
  ) {
    const { role, collaborator } = sessionState;
    const fixedProfessor = role == RoleEnum.CUSTOMER ? collaborator : undefined;
    if (!schoolSectionState) {
      return undefined;
    }
    const {
      params: { schoolClass, schoolSubject, schoolTerm, professor },
    } = schoolSectionState;

    return {
      professor: {
        value: fixedProfessor ?? professor,
        disabled: !!fixedProfessor,
        hidden: !!fixedProfessor,
        onChange: onChange?.professor,
      } as AutocompleteFieldData<CollaboratorDto>,
      schoolClass: {
        value: schoolClass,
        onChange: onChange?.schoolClass,
      } as AutocompleteFieldData<SchoolClassDto>,
      schoolSubject: {
        value: schoolSubject,
        onChange: onChange?.schoolSubject,
      } as AutocompleteFieldData<SchoolSubjectDto>,
      schoolTerm: {
        value: schoolTerm,
        onChange: onChange?.schoolTerm,
      } as AutocompleteFieldData<SchoolTermDto>,
    } as SchoolSectionForm;
  }
}
