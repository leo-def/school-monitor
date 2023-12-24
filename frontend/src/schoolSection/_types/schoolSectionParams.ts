export interface SchoolSectionParams {
  companyId?: string;
  branchId?: string;
  schoolSubjectId?: string;
  schoolClassId?: string;
  schoolTermId?: string;
  professorId?: string;
}

export function compareSchoolSectionParams(
  a?: SchoolSectionParams,
  b?: SchoolSectionParams
) {
  if (!a || !b) {
    return false;
  }
  return (
    a.companyId === b.companyId &&
    a.branchId === b.branchId &&
    a.schoolSubjectId === b.schoolSubjectId &&
    a.schoolClassId === b.schoolClassId &&
    a.schoolTermId === b.schoolTermId &&
    a.professorId === b.professorId
  );
}

export function isSchoolSectionParamsComplete(params?: SchoolSectionParams) {
  return (
    params &&
    params.companyId &&
    params.branchId &&
    params.schoolSubjectId &&
    params.schoolClassId &&
    params.schoolTermId
  );
}
