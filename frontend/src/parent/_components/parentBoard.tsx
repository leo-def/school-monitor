'use client'

import React, { useState } from "react";
import { Box, Tabs, Tab } from "@mui/material";
import { StudentList } from "@/student/_components/studentList";
import { TabPanel } from "@/app/_components/nav/tabPanel";

export function ParentBoard() {
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
                <Tab label="Alunos" />
            </Tabs>
        </Box>
        <TabPanel value={page} index={1}>
            <StudentList />
        </TabPanel >
    </React.Fragment >)
}