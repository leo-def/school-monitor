import React, { useCallback, useState } from "react";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import { ExpandMore as ExpandMoreIcon } from "@mui/icons-material";
import { useGetSchoolSectionForm } from "../../_hooks/useGetSchoolSectionForm";
import { SchoolSectionFilterForm } from "./schoolSectionFilterForm";
import { SchoolSectionFilterSummary } from "./schoolSectionFilterSummary";

export function SchoolSectionFilter() {
    const schoolSectionForm = useGetSchoolSectionForm()
    const [open, setOpen] = useState(false);
    const toggle = useCallback(
        () => setOpen(!open),
        [open],
    )
    if (!schoolSectionForm) {
        return undefined
    }
    const {
        professor,
        schoolClass,
        schoolSubject,
        schoolTerm,
    } = schoolSectionForm
    return (
        <Accordion expanded={open} onChange={toggle}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="school-section-filter-content"
                id="school-section-filter-header"
            >
                <SchoolSectionFilterSummary
                    professor={professor}
                    schoolClass={schoolClass}
                    schoolSubject={schoolSubject}
                    schoolTerm={schoolTerm}
                />
            </AccordionSummary>
            <AccordionDetails>
                <SchoolSectionFilterForm
                    professor={professor}
                    schoolClass={schoolClass}
                    schoolSubject={schoolSubject}
                    schoolTerm={schoolTerm}
                />
            </AccordionDetails>
        </Accordion>
    )
}


