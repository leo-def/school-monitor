
"use client";

import React from 'react'
import { Button, Typography } from '@mui/material'
import Link from 'next/link'
import { Trans, useTranslation } from 'react-i18next';

export function PublicHome() {
    const { t } = useTranslation('translation', { keyPrefix: 'home.public' });
    return (<React.Fragment>
        <Typography variant="h2">
            <Trans t={t}>School Monitor</Trans>
        </Typography>

        <Link href="/sign-in" passHref>  <Button size="small">Login</Button></Link>

        <Link href="/sign-up" passHref> <Button size="small">Criar conta</Button></Link>

    </React.Fragment>)
}