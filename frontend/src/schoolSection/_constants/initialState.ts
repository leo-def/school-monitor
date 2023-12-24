import { SchoolSectionState } from "../_types/schoolSectionState";

export const initialState = {
  schoolSection: undefined,
  params: {
    professor: undefined,
    schoolClass: undefined,
    schoolGrade: undefined,
    schoolSubject: undefined,
    schoolTerm: undefined,
  },
} as SchoolSectionState;
