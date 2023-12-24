
"use client";

import React from "react";
import { Grid, Typography } from "@mui/material";
import { Trans, useTranslation } from "react-i18next";
import { useGetAuthUserInfo } from "@/auth/_hooks/useGetAuthUserInfo";
import { SchoolSectionBoard } from "@/schoolSection/_components/schoolSectionBoard";

export function PrivateHome() {
    const userInfo = useGetAuthUserInfo()
    const name = userInfo?.name;
    const { t } = useTranslation('translation', { keyPrefix: 'home.private' });
    return (<Grid container>
        <Grid item xs={12}>
            <Typography variant="h2">
                <Trans t={t} values={{ name }} >
                    Welcome
                </Trans>
            </Typography>
        </Grid>
        <Grid item xs={12}>
            <SchoolSectionBoard />
        </Grid>
    </Grid>)
}