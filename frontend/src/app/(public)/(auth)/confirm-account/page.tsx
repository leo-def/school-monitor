'use client'

import React, { useCallback, useEffect, useState } from 'react'
import { Grid, Card, CardContent, Typography, CardActions } from '@mui/material';
import { useSearchParams, useRouter } from 'next/navigation';
import { useApiFetch } from '@/commons/api/_hooks/useApiFetch'
import { MessageSeverityEnum } from '@/commons/message/_enums/messageSeverity.enum'
import { useAddMessage } from '@/commons/message/_hooks/useAddMessage'


export default function ConfirmAccountPage() {
    const [requestSent, setRequestSent] = useState(false)
    const searchParams = useSearchParams();
    const token = searchParams.get('token') ?? undefined;
    const router = useRouter()
    const apiFetch = useApiFetch()
    const addMessage = useAddMessage()

    const confirmAccount = useCallback((token?: string) => {
        if (!token) {
            addMessage({ title: 'Token not informed', severity: MessageSeverityEnum.ERROR })
            router.push('/')
        }
        apiFetch('auth/confirm-account', { method: 'POST', body: JSON.stringify({ token }) })
            .then(async (response) => {
                setRequestSent(true)
                const data = await response.json()
                if (data.error) {
                    addMessage({ title: data.error, severity: MessageSeverityEnum.ERROR })
                } else {
                    addMessage({ title: 'Account confirmed', severity: MessageSeverityEnum.SUCCESS })
                    router.push('/sign-in')
                }
            })
            .catch((err) => {
                addMessage({ title: (err?.message ?? err), severity: MessageSeverityEnum.ERROR })
                setRequestSent(true)
            })
    }, [apiFetch, addMessage, router, setRequestSent])

    useEffect(() => {
        if (!requestSent) {
            confirmAccount(token)
        }
    }, [requestSent, confirmAccount, token])

    return (<Grid container justifyContent="center" rowSpacing={2}>
        <Grid item xs={12} md={6} lg={4}>
            <Card>
                <CardContent>
                    <Grid container alignItems="center" rowSpacing={2} direction="column">

                        <Grid item xs={12} lg={4} >
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                Confirmando conta {/* i18n */}
                            </Typography>
                        </Grid>
                    </Grid>
                </CardContent>
                <CardActions>
                </CardActions>
            </Card>
        </Grid>
    </Grid>)
}