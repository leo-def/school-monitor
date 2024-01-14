import { EmployeeAutocomplete } from "@/collaborator/_components/employeeAutocomplete";
import { CollaboratorDto } from "@/collaborator/_types/collaborator.dto";
import { AutocompleteFieldData } from "@/commons/api/_types/form/autocompleteFieldData";
import { SchoolClassAutocomplete } from "@/schoolClass/_components/schoolClassAutocomplete";
import { SchoolClassDto } from "@/schoolClass/_types/schoolClass.dto";
import { SchoolSubjectAutocomplete } from "@/schoolSubject/_components/schoolSubjectAutocomplete";
import { SchoolSubjectDto } from "@/schoolSubject/_types/schoolSubject.dto";
import { SchoolTermAutocomplete } from "@/schoolTerm/_components/schoolTermAutocomplete";
import { SchoolTermDto } from "@/schoolTerm/_types/schoolTerm.dto";
import { useGetSessionForm } from "@/session/_hooks/useGetSessionForm";
import { Grid } from "@mui/material";
import { useMemo } from "react";

export interface SchoolSectionFilterFormProps {
    readonly professor: AutocompleteFieldData<CollaboratorDto>;
    readonly schoolClass: AutocompleteFieldData<SchoolClassDto>;
    readonly schoolSubject: AutocompleteFieldData<SchoolSubjectDto>;
    readonly schoolTerm: AutocompleteFieldData<SchoolTermDto>;
}

export function SchoolSectionFilterForm({
    professor,
    schoolClass,
    schoolSubject,
    schoolTerm
}: SchoolSectionFilterFormProps) {
    return (<Grid container spacing={2}>
        <Grid item xs={12} md={6} lg={4} display={schoolClass.hidden ? "none" : undefined} >
            <SchoolClassAutocomplete
                size="small"
                disabled={schoolClass.disabled}
                value={schoolClass.value?.id}
                onChange={(value) => schoolClass.onChange ? schoolClass.onChange(value?.object) : undefined}
            />
        </Grid>

        <Grid item xs={12} md={6} lg={4} display={schoolSubject.hidden ? "none" : undefined} >
            <SchoolSubjectAutocomplete
                size="small"
                disabled={schoolSubject.disabled}
                value={schoolSubject.value?.id}
                onChange={(value) => schoolSubject.onChange ? schoolSubject.onChange(value?.object) : undefined}
            />
        </Grid>


        <Grid item xs={12} md={6} lg={4} display={schoolTerm.hidden ? "none" : undefined} >
            <SchoolTermAutocomplete
                size="small"
                disabled={schoolTerm.disabled}
                value={schoolTerm.value?.id}
                onChange={(value) => schoolTerm.onChange ? schoolTerm.onChange(value?.object) : undefined}

            />
        </Grid>


        <Grid item xs={12} md={6} lg={4} display={professor.hidden ? "none" : undefined} >
            <EmployeeAutocomplete
                size="small"
                disabled={professor.disabled}
                value={professor.value?.id}
                onChange={(value) => professor.onChange ? professor.onChange(value?.object) : undefined}
            />
        </Grid>
    </Grid>)
}