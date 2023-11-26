'use client'

import React, { useCallback } from "react";
import { SubmitHandler, useForm, get } from "react-hook-form";
import * as yup from "yup";
import { TextField, Grid } from "@mui/material";
import { useSearchParams } from 'next/navigation';
import { yupResolver } from "@hookform/resolvers/yup";


export interface SignUpReferenceInputs {
    token?: string
    id?: string
}

export interface SignUpReferenceFormProps {
    onComplete: (input: SignUpReferenceInputs) => Promise<void>;
    isFormActive?: boolean;
    formId?: string;
}

export function SignUpReferenceForm({ onComplete, formId }: SignUpReferenceFormProps) {
    const searchParams = useSearchParams();
    const referenceToken = searchParams.get('token') ?? undefined;

    const defaultValues = {
        token: referenceToken
    } as SignUpReferenceInputs

    const schema = yup.object().shape({
        token: yup.string().optional(),
        id: yup.string().optional()
    });

    const { register, handleSubmit, formState: { errors }
    } = useForm<SignUpReferenceInputs>({
        defaultValues,
        resolver: yupResolver<SignUpReferenceInputs>(schema),
    });
    const onSubmit: SubmitHandler<SignUpReferenceInputs> = useCallback(async (data: SignUpReferenceInputs) => await onComplete(data), [onComplete]);

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
                        label="Token de Indicação"
                        variant="standard"
                        name="token"
                        error={!!get(errors, 'token')}
                        helperText={get(errors, 'token')?.message}
                        inputProps={{
                            ...register('token', { required: true }),
                        }}
                        onKeyDown={async (e) => await onLastFieldKeyDown(e.key)} />
                </Grid>
            </Grid>
        </fieldset>
    </form>)
}
