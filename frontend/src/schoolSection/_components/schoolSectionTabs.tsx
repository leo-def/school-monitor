'use client'

import React, { useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Box, LinearProgress, Tab } from "@mui/material";
import { useApiFetch } from "@/commons/api/_hooks/useApiFetch";
import { MessageSeverityEnum } from "@/commons/message/_enums/messageSeverity.enum";
import { useAddMessage } from "@/commons/message/_hooks/useAddMessage";
import { SchoolSectionParams, compareSchoolSectionParams, isSchoolSectionParamsComplete } from "../_types/schoolSectionParams";
import { useGetSchoolSectionParams } from "../_hooks/useGetSchoolSectionParams";
import { useSetSchoolSections } from "../_hooks/useSetSchoolSection";
import { TabBar } from "@/commons/_components/nav/tabBar";
import { TabPanel } from "@/commons/_components/nav/tabPanel";


export function SchoolSectionTabs() {
    const { t } = useTranslation('translation', { keyPrefix: 'schoolSection.board' });
    const fetchParams = useGetSchoolSectionParams()
    const apiFetch = useApiFetch()
    const addMessage = useAddMessage()
    const [currFetchParams, setCurrFetchParams] = useState(null as SchoolSectionParams | null)
    const [loading, setLoading] = useState(false as boolean)
    const setSchoolSections = useSetSchoolSections()

    const getOrCreateSchoolSection = useCallback((params?: SchoolSectionParams) => {
        if (!params || !isSchoolSectionParamsComplete(params)) {
            return
        }
        setLoading(true)
        apiFetch('school-section/get-or-create', { method: 'POST', body: JSON.stringify(params) })
            .then(async (response) => {
                const data = await response.json()
                if (data.error) {
                    addMessage({ title: data.error, severity: MessageSeverityEnum.ERROR })
                } else {
                    setSchoolSections(data.data)
                }
            })
            .catch((err) => {
                addMessage({ title: (err?.message ?? err), severity: MessageSeverityEnum.ERROR })
            })
            .finally(() => {
                setCurrFetchParams(params)
                setLoading(false)
            })
    }, [addMessage, apiFetch, setSchoolSections])


    const [page, setPage] = useState(0)
    const handleChange = useCallback((_event: React.SyntheticEvent, newValue: number) => {
        setPage(newValue);
    }, [setPage])

    useEffect(() => {
        if (
            !currFetchParams ||
            (
                fetchParams &&
                !compareSchoolSectionParams(currFetchParams, fetchParams)
            )
        ) {

            getOrCreateSchoolSection(fetchParams)
        }
    }, [currFetchParams, fetchParams, getOrCreateSchoolSection])

    return (<React.Fragment>
        <TabBar page={page} onChange={handleChange}>
            <Tab label={t('Calendar')} />
            <Tab label={t('Meals')} />
            <Tab label={t('Events')} />
            <Tab label={t('Notifications')} />
            <Tab label={t('Appraisals')} />
            <Tab label={t('Projects')} />
            <Tab label={t('Absences')} />
        </TabBar>
        <Box sx={{ display: loading ? undefined : "none", width: "100%" }}>
            <LinearProgress />
        </Box>
        <TabPanel value={page} index={0}>
            {/*<SchoolSectionCalendar />*/}
        </TabPanel >
        <TabPanel value={page} index={1}>
            {/*<MealTable />*/}
        </TabPanel >
        <TabPanel value={page} index={2}>
            {/*<EventList />*/}
        </TabPanel >
        <TabPanel value={page} index={3}>
            {/*<NotificationList />*/}
        </TabPanel >
        <TabPanel value={page} index={4}>
            {/*<AppraisalList />*/}
        </TabPanel >
        <TabPanel value={page} index={5}>
            {/*<ProjectList />*/}
        </TabPanel >
        <TabPanel value={page} index={6}>
            {/*<AbsenceList />*/}
        </TabPanel >

    </React.Fragment >)
}