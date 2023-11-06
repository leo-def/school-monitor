'use client'

import React, { useState } from "react";
import { TabPanel } from "@/app/_components/nav/tabPanel";
import { SchoolClassList } from "@/schoolClass/_components/schoolClassList";
import { StudentList } from "@/student/_components/studentList";
import { TeacherList } from "@/teacher/_components/teacherList";
import { Box, Tabs, Tab } from "@mui/material";

export function ManagerBoard() {
    const [page, setPage] = useState(0)

    const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
        setPage(newValue);
    };
    return (<React.Fragment>
        <Box sx={{ borderBottom: 1, borderColor: 'divider', marginBottom: 2, maxWidth: '100vw' }}>
            <Tabs
                value={page}
                onChange={handleChange}
                aria-label="tabs"
                variant="scrollable"
                scrollButtons
                allowScrollButtonsMobile>
                <Tab label="Professores" />
                <Tab label="Alunos" />
                <Tab label="Turmas" />
            </Tabs>
        </Box>
        <TabPanel value={page} index={0}>
            <TeacherList />
        </TabPanel >
        <TabPanel value={page} index={1}>
            <StudentList />
        </TabPanel >
        <TabPanel value={page} index={2}>
            <SchoolClassList />
        </TabPanel >
    </React.Fragment >)
}