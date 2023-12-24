import { SchoolSectionSetProfessorPayload } from "./payloads/schoolSectionSetProfessorPayload";
import { SchoolSectionSetSchoolClassPayload } from "./payloads/schoolSectionSetSchoolClassPayload";
import { SchoolSectionsSetSchoolSectionPayload } from "./payloads/schoolSectionSetSchoolSectionsPayload";
import { SchoolSectionSetSchoolSubjectPayload } from "./payloads/schoolSectionSetSchoolSubjectPayload";
import { SchoolSectionSetSchoolTermPayload } from "./payloads/schoolSectionSetSchoolTermPayload";

export type SchoolSectionPayload =
  | SchoolSectionSetProfessorPayload
  | SchoolSectionSetSchoolClassPayload
  | SchoolSectionsSetSchoolSectionPayload
  | SchoolSectionSetSchoolSubjectPayload
  | SchoolSectionSetSchoolTermPayload;
