import { initialState } from "../_constants/initialState";
import { SchoolSectionActionTypeEnum } from "../_enums/schoolSectionActionType.enum";
import { SchoolSectionSetProfessorPayload } from "../_types/payloads/schoolSectionSetProfessorPayload";
import { SchoolSectionSetSchoolClassPayload } from "../_types/payloads/schoolSectionSetSchoolClassPayload";
import { SchoolSectionsSetSchoolSectionPayload } from "../_types/payloads/schoolSectionSetSchoolSectionsPayload";
import { SchoolSectionSetSchoolSubjectPayload } from "../_types/payloads/schoolSectionSetSchoolSubjectPayload";
import { SchoolSectionSetSchoolTermPayload } from "../_types/payloads/schoolSectionSetSchoolTermPayload";
import { SchoolSectionAction } from "../_types/schoolSectionAction";
import { SchoolSectionState } from "../_types/schoolSectionState";

export const schoolSectionReducer = (
  state: SchoolSectionState,
  action: SchoolSectionAction
): SchoolSectionState => {
  switch (action.type) {
    case SchoolSectionActionTypeEnum.SET_SCHOOL_SECTIONS:
      return {
        ...state,
        schoolSection: (action.payload as SchoolSectionsSetSchoolSectionPayload)
          .schoolSection,
      };

    case SchoolSectionActionTypeEnum.SET_SCHOOL_SUBJECT:
      return {
        ...state,
        params: {
          ...state.params,
          schoolSubject: (
            action.payload as SchoolSectionSetSchoolSubjectPayload
          ).schoolSubject,
        },
      };
    case SchoolSectionActionTypeEnum.SET_SCHOOL_CLASS:
      return {
        ...state,
        params: {
          ...state.params,
          schoolClass: (action.payload as SchoolSectionSetSchoolClassPayload)
            .schoolClass,
        },
      };
    case SchoolSectionActionTypeEnum.SET_SCHOOL_TERM:
      return {
        ...state,
        params: {
          ...state.params,
          schoolTerm: (action.payload as SchoolSectionSetSchoolTermPayload)
            .schoolTerm,
        },
      };
    case SchoolSectionActionTypeEnum.SET_PROFESSOR:
      return {
        ...state,
        params: {
          ...state.params,
          professor: (action.payload as SchoolSectionSetProfessorPayload)
            .professor,
        },
      };
    case SchoolSectionActionTypeEnum.RESET:
      return initialState;
    default:
      return state;
  }
};
