"use client";

import React, { useCallback } from "react";
import { SubmitHandler, useForm, get } from "react-hook-form";
import * as yup from "yup";
import { TextField, Grid } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";

export interface SignUpProfileInputs {
    name: string
    phone: string
    email: string
}

export interface SignUpProfileFormProps {
    onComplete: (input: SignUpProfileInputs) => Promise<void>;
    isFormActive?: boolean;
    formId?: string;
}

export function SignUpProfileForm({ onComplete, formId }: SignUpProfileFormProps) {
    const defaultValues = {
        name: '',
        phone: '',
        email: ''

    } as SignUpProfileInputs

    const schema = yup.object().shape({
        name: yup.string()
            .required("Name is required"),
        phone: yup.string()
            .required("Phone is required"),
        email: yup.string()
            .required("E-mail is required"),
    });

    const { register, handleSubmit, formState: { errors }
    } = useForm<SignUpProfileInputs>({
        defaultValues,
        resolver: yupResolver<SignUpProfileInputs>(schema),
    });
    const onSubmit: SubmitHandler<SignUpProfileInputs> = useCallback(async (data: SignUpProfileInputs) => await onComplete(data), [onComplete]);

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
                        label="Nome"
                        variant="standard"
                        name="name"
                        error={!!get(errors, 'name')}
                        helperText={get(errors, 'name')?.message}
                        inputProps={register('name', { required: true })}
                        autoComplete="on" />
                </Grid>

                <Grid item xs={12} lg={4} >
                    <TextField
                        label="Phone"
                        variant="standard"
                        type="tel"
                        name="phone"
                        error={!!get(errors, 'phone')}
                        helperText={get(errors, 'phone')?.message}
                        inputProps={register('phone', { required: true })}
                        autoComplete="on" />
                </Grid>

                <Grid item xs={12} lg={4} >
                    <TextField
                        label="Email"
                        variant="standard"
                        type="email"
                        name="email"
                        error={!!get(errors, 'email')}
                        helperText={get(errors, 'email')?.message}
                        inputProps={{
                            ...register('email', { required: true }),
                        }}
                        onKeyDown={async (e) => await onLastFieldKeyDown(e.key)}
                        autoComplete="on"
                    />
                </Grid>

            </Grid>
        </fieldset>
    </form>)
}
