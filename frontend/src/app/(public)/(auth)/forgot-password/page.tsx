'use client'

import React, { useCallback, useState } from 'react'
import * as yup from "yup";
import { useForm, SubmitHandler } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { Button } from '@mui/base'
import { Grid, Card, CardContent, Typography, TextField, CardActions } from '@mui/material'
import { useApiFetch } from '@/api/_hooks/useApiFetch'
import { MessageSeverityEnum } from '@/message/_enums/messageSeverity.enum'
import { useAddMessage } from '@/message/_hooks/useAddMessage'
import { ForgotPasswordParamTypeEnum } from './_enums/forgotPasswordParamType.enum'
import { yupResolver } from '@hookform/resolvers/yup';

type ForgotPasswordFormInputs = {
    phone?: string
    email?: string
    paramType: ForgotPasswordParamTypeEnum
}

export default function ForgotPasswordPage() {

    const defaultValues = {
        phone: '',
        email: '',
        paramType: ForgotPasswordParamTypeEnum.EMAIL
    } as ForgotPasswordFormInputs

    const schema = yup.object().shape({
        phone: yup.string().when('paramType', {
            is: ForgotPasswordParamTypeEnum.PHONE,
            then: (schema) => schema.required("Phone is required"),
            otherwise: (schema) => schema.notRequired(),
        }),
        email: yup.string().when('paramType', {
            is: ForgotPasswordParamTypeEnum.EMAIL,
            then: (schema) => schema.required("Email is required"),
            otherwise: (schema) => schema.notRequired(),
        }),
        paramType: yup.mixed<ForgotPasswordParamTypeEnum>().required().oneOf(Object.values(ForgotPasswordParamTypeEnum).map(value => value as ForgotPasswordParamTypeEnum)),
    });

    const router = useRouter()
    const apiFetch = useApiFetch()
    const addMessage = useAddMessage()
    const [paramType, setParamType] = useState(ForgotPasswordParamTypeEnum.EMAIL)
    const forgotPassword = useCallback((data: ForgotPasswordFormInputs) => {
        apiFetch('auth/forgot-password', { method: 'POST', body: JSON.stringify(data) })
            .then(async (response) => {
                const data = await response.json()
                if (data.error) {
                    addMessage({ title: data.error, severity: MessageSeverityEnum.ERROR })
                } else {
                    addMessage({ title: 'Token send', severity: MessageSeverityEnum.SUCCESS })
                    router.push('/')
                }
            })
    }, [apiFetch, addMessage, router])

    const { register, handleSubmit } = useForm<ForgotPasswordFormInputs>({
        defaultValues,
        resolver: yupResolver<ForgotPasswordFormInputs>(schema),
    });
    const onSubmit: SubmitHandler<ForgotPasswordFormInputs> = async (data: ForgotPasswordFormInputs) => forgotPassword(data);

    const setPhoneParamType = useCallback(() => setParamType(ForgotPasswordParamTypeEnum.PHONE), [setParamType])
    const setEmailParamType = useCallback(() => setParamType(ForgotPasswordParamTypeEnum.EMAIL), [setParamType])
    return (<form onSubmit={handleSubmit(onSubmit)}>
        <Grid container justifyContent="center" rowSpacing={2}>
            <Grid item xs={12} md={6} lg={4}>
                <Card>
                    <CardContent>
                        <fieldset>
                            <Grid container alignItems="center" rowSpacing={2} direction="column">

                                <Grid item xs={12} lg={4} >
                                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                        Recuperar senha {/* i18n */}
                                    </Typography>
                                </Grid>
                                {paramType === ForgotPasswordParamTypeEnum.PHONE ?
                                    <Grid item xs={12} lg={4} >
                                        <TextField
                                            label="Telefone"
                                            variant="standard"
                                            inputProps={register('phone', { required: true })}
                                            type="tel"
                                            name="phone" /> {/* i18n label */}
                                    </Grid> : null}
                                {paramType === ForgotPasswordParamTypeEnum.EMAIL ?
                                    <Grid item xs={12} lg={4} >
                                        <TextField
                                            label="E-mail"
                                            variant="standard"
                                            inputProps={register('email', { required: true })}
                                            type="email"
                                            name="email" /> {/* i18n label */}
                                    </Grid> : null}
                                <Grid item xs={12} lg={4} >
                                    <Button type="submit">Recuperar senha</Button> {/* i18n */}
                                </Grid>
                            </Grid>

                        </fieldset>
                    </CardContent>
                    <CardActions>
                        {paramType === ForgotPasswordParamTypeEnum.EMAIL ?
                            <Button onClick={() => setPhoneParamType()}>Usar telefone{/* i18n */}</Button>
                            : null}
                        {paramType === ForgotPasswordParamTypeEnum.PHONE ?
                            <Button onClick={() => setEmailParamType()}>Usar e-mail{/* i18n */}</Button>
                            : null}
                    </CardActions>
                </Card>
            </Grid>
        </Grid>
    </form>)
}