'use client'

import React, { useCallback } from "react";
import * as yup from "yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { Card, CardContent, Typography, CardActions, TextField, Grid, Button } from "@mui/material";
import Link from "next/link";
import { useRouter } from 'next/navigation'
import { yupResolver } from "@hookform/resolvers/yup";
import { useApiFetch } from "@/commons/api/_hooks/useApiFetch";
import { useAddMessage } from "@/commons/message/_hooks/useAddMessage";
import { MessageSeverityEnum } from "@/commons/message/_enums/messageSeverity.enum";
import { useAuth } from "@/auth/_hooks/useAuth";

type SignInFormInputs = {
    username: string
    password: string
}

export default function SignInPage() {
    const defaultValues = {
        username: '',
        password: '',
    } as SignInFormInputs

    const schema = yup.object().shape({
        username: yup.string()
            .required("Username is required"),
        password: yup.string()
            .required("Password is required")
            .min(4, "Password length should be at least 4 characters")
            .max(12, "Password cannot exceed more than 12 characters")
    });

    const router = useRouter()
    const apiFetch = useApiFetch()
    const setAuth = useAuth()
    const addMessage = useAddMessage()

    const signIn = useCallback((data: SignInFormInputs) => {
        apiFetch('auth/sign-in', { method: 'POST', body: JSON.stringify(data) })
            .then(async (response) => {
                const responseBody = await response.json()
                if (responseBody.error) {
                    addMessage({ title: responseBody.error, severity: MessageSeverityEnum.ERROR })
                } else {
                    setAuth(responseBody?.data?.token)
                    addMessage({ title: 'SignIn Success', severity: MessageSeverityEnum.SUCCESS })
                    router.replace('/')
                }
            })
    }, [apiFetch, addMessage, setAuth, router])

    const { register, handleSubmit } = useForm<SignInFormInputs>({
        defaultValues,
        resolver: yupResolver<SignInFormInputs>(schema),
    });
    const onSubmit: SubmitHandler<SignInFormInputs> = async (data: SignInFormInputs) => signIn(data);

    return (<form onSubmit={handleSubmit(onSubmit)}>
        <Grid container justifyContent="center" rowSpacing={2}>
            <Grid item xs={12} md={6} lg={4}>
                <Card>
                    <CardContent>
                        <fieldset>
                            <Grid container alignItems="center" rowSpacing={2} direction="column">

                                <Grid item xs={12} lg={4} >
                                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                        Entrar {/* i18n */}
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} lg={4} >
                                    <TextField
                                        label="Usuário"
                                        variant="standard"
                                        inputProps={register('username', { required: true })}
                                        name="username" /> {/* i18n label */}
                                </Grid>
                                <Grid item xs={12} lg={4} >
                                    <TextField
                                        label="Senha"
                                        variant="standard"
                                        inputProps={register('password', { required: true })}
                                        type="password"
                                        name="password" /> {/* i18n label */}
                                </Grid>
                                <Grid item xs={12} lg={4} >
                                    <Button type="submit">Login</Button> {/* i18n */}
                                </Grid>
                            </Grid>


                        </fieldset>
                    </CardContent>
                    <CardActions>
                        <Link href="/forgot-password" passHref> <Button>Esqueceu a senha</Button> {/* i18n */}</Link>
                        <Link href="/sign-up" passHref> <Button>Criar conta</Button> {/* i18n */}</Link>
                    </CardActions>
                </Card>
            </Grid>
        </Grid>
    </form>)
}