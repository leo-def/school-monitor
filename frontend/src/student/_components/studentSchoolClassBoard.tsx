'use client'

import React, { useState } from "react";
import { Box, Tabs, Tab } from "@mui/material";
import { SchoolClassList } from "@/schoolClass/_components/schoolClassList";
import { TabPanel } from "@/app/_components/nav/tabPanel";

export function StudentBoard() {
    const [page, setPage] = useState(0)
    const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
        setPage(newValue);
    };
    return (<React.Fragment>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={page} onChange={handleChange} aria-label="tabs">
                <Tab label="Turmas" />
            </Tabs>
        </Box>
        <TabPanel value={page} index={0}>
            <SchoolClassList />
        </TabPanel >
    </React.Fragment >)
}