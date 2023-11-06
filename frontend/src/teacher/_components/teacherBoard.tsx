'use client'

import React, { useState } from "react";
import { Box, Tabs, Tab } from "@mui/material";
import { SchoolClassList } from "@/schoolClass/_components/schoolClassList";
import { TabPanel } from "@/app/_components/nav/tabPanel";
import { TabBar } from "@/app/_components/nav/tabBar";

export function TeacherBoard() {
    const [page, setPage] = useState(0)

    const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
        setPage(newValue);
    };

    return (<React.Fragment>
        <TabBar page={page} onChange={handleChange}>
            <Tab label="Turmas" />
        </TabBar>
        <TabPanel value={page} index={0}>
            <SchoolClassList />
        </TabPanel >
    </React.Fragment >)
}