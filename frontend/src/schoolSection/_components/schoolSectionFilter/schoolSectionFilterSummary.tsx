
import React from "react";
import { CollaboratorDto } from "@/collaborator/_types/collaborator.dto";
import { AutocompleteFieldData } from "@/commons/api/_types/form/autocompleteFieldData";
import { SchoolClassDto } from "@/schoolClass/_types/schoolClass.dto";
import { SchoolSubjectDto } from "@/schoolSubject/_types/schoolSubject.dto";
import { SchoolTermDto } from "@/schoolTerm/_types/schoolTerm.dto";
import { Chip, Avatar } from "@mui/material";

export interface SchoolSectionFilterSummaryProps {
    readonly professor: AutocompleteFieldData<CollaboratorDto>;
    readonly schoolClass: AutocompleteFieldData<SchoolClassDto>;
    readonly schoolSubject: AutocompleteFieldData<SchoolSubjectDto>;
    readonly schoolTerm: AutocompleteFieldData<SchoolTermDto>;
}


export function SchoolSectionFilterSummary({
    professor,
    schoolClass,
    schoolSubject,
    schoolTerm
}: SchoolSectionFilterSummaryProps) {
    return (<React.Fragment>
        {schoolClass?.object ?
            <Chip
                avatar={<Avatar>{(schoolClass?.object?.title ?? '').substring(0, 2)}</Avatar>}
                label={schoolClass?.object?.title}
                onDelete={() => schoolClass.onObjectChange ? schoolClass.onObjectChange(undefined) : undefined} />

            : undefined}

        {schoolSubject?.object ?
            <Chip
                avatar={<Avatar>{(schoolSubject?.object?.title ?? '').substring(0, 2)}</Avatar>}
                label={schoolSubject?.object?.title}
                onDelete={() => schoolSubject.onObjectChange ? schoolSubject.onObjectChange(undefined) : undefined} />

            : undefined}

        {schoolTerm?.object ?
            <Chip
                avatar={<Avatar>{(schoolTerm?.object?.title ?? '').substring(0, 2)}</Avatar>}
                label={schoolTerm?.object?.title}
                onDelete={() => schoolTerm.onObjectChange ? schoolTerm.onObjectChange(undefined) : undefined} />
            : undefined}

        {professor?.object ?
            <Chip
                avatar={<Avatar>{(professor?.object?.title ?? '').substring(0, 2)}</Avatar>}
                label={professor?.object?.title}
                onDelete={!professor.hidden ? () => professor.onObjectChange ? professor.onObjectChange(undefined) : undefined : undefined} />
            : undefined}


    </React.Fragment>)
}