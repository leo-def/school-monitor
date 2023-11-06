'use client'

import React, { useState } from "react";
import { Box, Tabs, Tab } from "@mui/material";
import { StudentList } from "@/student/_components/studentList";
import { TabPanel } from "@/app/_components/nav/tabPanel";
import { TabBar } from "@/app/_components/nav/tabBar";

export function ParentBoard() {
    const [page, setPage] = useState(0)

    const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
        setPage(newValue);
    };
    return (<React.Fragment>
        <TabBar page={page} onChange={handleChange}>
            <Tab label="Alunos" />
        </TabBar>
        <TabPanel value={page} index={1}>
            <StudentList />
        </TabPanel >
    </React.Fragment >)
}