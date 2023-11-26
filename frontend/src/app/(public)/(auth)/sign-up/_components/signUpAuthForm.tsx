'use client'


import React, { useCallback } from "react";
import { SubmitHandler, useForm, get } from "react-hook-form";
import * as yup from "yup";
import { TextField, Grid } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";

export interface SignUpAuthInputs {
    username: string
    password: string
    confirmPassword: string
}

export interface SignUpAuthFormProps {
    onComplete: (input: SignUpAuthInputs) => Promise<void>;
    isFormActive?: boolean;
    formId?: string;
}

export function SignUpAuthForm({ onComplete, formId }: SignUpAuthFormProps) {
    const defaultValues = {
        username: '',
        password: '',
        confirmPassword: ''

    } as SignUpAuthInputs

    const schema = yup.object().shape({
        username: yup.string()
            .required("Username is required"),
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


    const { register, handleSubmit, formState: { errors }
    } = useForm<SignUpAuthInputs>({
        defaultValues,
        resolver: yupResolver<SignUpAuthInputs>(schema),
    });
    const onSubmit: SubmitHandler<SignUpAuthInputs> = useCallback(async (data: SignUpAuthInputs) => await onComplete(data), [onComplete]);

    const onLastFieldKeyDown = useCallback(async (eventKey: string) => {
        if (eventKey === 'Tab' || eventKey === 'Enter') {
            await handleSubmit(onSubmit)()
        }
    }, [handleSubmit, onSubmit])

    return (<form id={formId} onSubmit={handleSubmit(onSubmit)}>
        <fieldset>
            <Grid container alignItems="center" rowSpacing={2} direction="column">

                <Grid item xs={12} lg={4} >
                    <TextField
                        label="Usuário"
                        variant="standard"
                        name="username"
                        error={!!get(errors, 'username')}
                        helperText={get(errors, 'username')?.message}
                        inputProps={register('username', { required: true })}
                        autoComplete="on" /> {/* i18n label */}
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

            </Grid>
        </fieldset>
    </form>)
}
