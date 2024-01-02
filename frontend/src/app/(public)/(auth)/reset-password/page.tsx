"use client";

import React, { useCallback } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Grid, Card, CardContent, Typography, CardActions, TextField, Button } from "@mui/material";
import * as yup from "yup"; import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, get, useForm } from "react-hook-form";
import { useApiFetch } from "@/commons/api/_hooks/useApiFetch";
import { MessageSeverityEnum } from "@/commons/message/_enums/messageSeverity.enum";
import { useAddMessage } from "@/commons/message/_hooks/useAddMessage";


export interface ResetPasswordInputs {
    token: string
    password: string
    confirmPassword: string
}

export default function ResetPasswordPage() {
    const searchParams = useSearchParams();
    const token = searchParams.get('token') ?? undefined;

    const defaultValues = {
        token,
        password: '',
        confirmPassword: ''
    } as ResetPasswordInputs

    const schema = yup.object().shape({
        token: yup.string()
            .required("Token is required"),
        password: yup.string()
            .required("Password is required")
            .min(4, "Password length should be at least 4 characters")
            .max(12, "Password cannot exceed more than 12 characters"),
        confirmPassword: yup.string()
            .required("Confirm Password is required")
            .min(4, "Password length should be at least 4 characters")
            .max(12, "Password cannot exceed more than 12 characters")
            .oneOf([yup.ref("password")], "Passwords do not match")
    });


    const router = useRouter()
    const apiFetch = useApiFetch()
    const addMessage = useAddMessage()

    const resetPassword = useCallback(async (data: ResetPasswordInputs) => {
        apiFetch('auth/reset-password', { method: 'POST', body: JSON.stringify(data) })
            .then(async (response) => {
                const data = await response.json()
                if (data.error) {
                    addMessage({ title: data.error, severity: MessageSeverityEnum.ERROR })
                } else {
                    addMessage({ title: 'Password recovered', severity: MessageSeverityEnum.SUCCESS })
                    router.push('/sign-in')
                }
            })
            .catch((err) => {
                addMessage({ title: (err?.message ?? err), severity: MessageSeverityEnum.ERROR })
            })
    }, [apiFetch, addMessage, router])

    const { register, handleSubmit, formState: { errors }
    } = useForm<ResetPasswordInputs>({
        defaultValues,
        resolver: yupResolver<ResetPasswordInputs>(schema),
    });
    const onSubmit: SubmitHandler<ResetPasswordInputs> = useCallback(async (data: ResetPasswordInputs) => await resetPassword(data), [resetPassword]);

    const onLastFieldKeyDown = useCallback(async (eventKey: string) => {
        if (eventKey === 'Tab' || eventKey === 'Enter') {
            await handleSubmit(onSubmit)()
        }
    }, [handleSubmit, onSubmit])

    return (<form onSubmit={handleSubmit(onSubmit)}>
        <fieldset>
            <Grid container justifyContent="center" rowSpacing={2}>
                <Grid item xs={12} md={6} lg={4}>
                    <Card>
                        <CardContent>
                            <Grid container alignItems="center" rowSpacing={2} direction="column">

                                <Grid item xs={12} lg={4} >
                                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                        Recuperar senha {/* i18n */}
                                    </Typography>
                                </Grid>

                                <Grid item xs={12} lg={4} >
                                    <TextField
                                        label="Senha"
                                        variant="standard"
                                        type="password"
                                        name="password"
                                        error={!!get(errors, 'password')}
                                        helperText={get(errors, 'password')?.message}
                                        inputProps={register('password', { required: true })}
                                        autoComplete="on" /> {/* i18n label */}
                                </Grid>

                                <Grid item xs={12} lg={4} >
                                    <TextField
                                        label="Confirmar senha"
                                        variant="standard"
                                        type="password"
                                        name="confirmPassword"
                                        inputProps={{
                                            ...register('confirmPassword', { required: true }),
                                        }}
                                        onKeyDown={async (e) => await onLastFieldKeyDown(e.key)}
                                        error={!!get(errors, 'confirmPassword')}
                                        helperText={get(errors, 'confirmPassword')?.message}
                                        autoComplete="off" /> {/* i18n label */}

                                </Grid>

                                <Grid item xs={12} lg={4} >
                                    <Button type="submit">Recuperar senha</Button> {/* i18n */}
                                </Grid>
                            </Grid>
                        </CardContent>
                        <CardActions>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
        </fieldset>
    </form>)
}