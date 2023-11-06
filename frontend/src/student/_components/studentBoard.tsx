'use client'

import React, { useMemo, useState } from "react";
import { Box, Tabs, Tab } from "@mui/material";
import { SchoolClassList } from "@/schoolClass/_components/schoolClassList";
import { useGetNavByType } from "@/nav/_hooks/useGetNavByType";
import { TabPanel } from "@/app/_components/nav/tabPanel";
import { SchoolClassBoard } from "@/schoolClass/_components/schoolClassBoard";
import { TabBar } from "@/app/_components/nav/tabBar";

export function StudentBoard() {
    const [page, setPage] = useState(0)
    const schoolClassNavItem = useGetNavByType("schoolClass")
    const hasSchoolClassNavItem = useMemo(() => !!schoolClassNavItem, [schoolClassNavItem])
    const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
        setPage(newValue);
    };
    if (hasSchoolClassNavItem) {
        return <SchoolClassBoard />
    }

    return (<React.Fragment>
        <TabBar page={page} onChange={handleChange}>
            <Tab label="Turmas" />
        </TabBar>
        <TabPanel value={page} index={0}>
            <SchoolClassList />
        </TabPanel >
    </React.Fragment >)
}