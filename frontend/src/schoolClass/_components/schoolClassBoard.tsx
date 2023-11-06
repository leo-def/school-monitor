'use client'

import React, { useMemo, useState } from "react";
import { Box, Tabs, Tab } from "@mui/material";
import { StudentList } from "@/student/_components/studentList";
import { TabPanel } from "@/app/_components/nav/tabPanel";
import { NotificationList } from "@/notification/_components/notificationList";
import { HomeworkList } from "@/homework/_components/homeworkList";
import { AppraisalList } from "@/appraisal/_components/appraisalList";
import { SubjectList } from "@/subject/_components/subjectList";
import { EventList } from "@/event/_components/eventList";
import { MealTable } from "@/meal/_components/mealTable";
import { useGetNavByType } from "@/nav/_hooks/useGetNavByType";
import { AbsenceList } from "@/absence/_components/absenceList";
import { SchoolClassCalendar } from "./schoolClassCalendar";


export function SchoolClassBoard() {
    const studentNavItem = useGetNavByType("student")
    const hasStudentNavItem = useMemo(() => !!studentNavItem, [studentNavItem])
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
                <Tab label="Calendário" />
                <Tab label="Notificações" />
                <Tab label="Trabalhos" />
                <Tab label="Provas" />
                <Tab label="Grade" />
                <Tab label="Eventos" />
                <Tab label="Cardápio" />
                {hasStudentNavItem
                    ? <Tab label="Faltas" />
                    : <Tab label="Alunos" />
                }
            </Tabs>
        </Box>
        <TabPanel value={page} index={0}>
            <SchoolClassCalendar />
        </TabPanel >
        <TabPanel value={page} index={1}>
            <NotificationList />
        </TabPanel >
        <TabPanel value={page} index={2}>
            <HomeworkList />
        </TabPanel >
        <TabPanel value={page} index={3}>
            <AppraisalList />
        </TabPanel >
        <TabPanel value={page} index={4}>
            <SubjectList />
        </TabPanel >
        <TabPanel value={page} index={5}>
            <EventList />
        </TabPanel >
        <TabPanel value={page} index={6}>
            <MealTable />
        </TabPanel >
        {hasStudentNavItem
            ? <TabPanel value={page} index={7}>
                <AbsenceList />
            </TabPanel >
            : <TabPanel value={page} index={7}>
                <StudentList />
            </TabPanel >
        }
    </React.Fragment >)
}