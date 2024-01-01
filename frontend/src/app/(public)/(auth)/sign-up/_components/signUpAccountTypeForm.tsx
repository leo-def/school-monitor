"use client";

import React, { useCallback, useEffect, useMemo, useState } from "react";
import { SubmitHandler, useForm, get } from "react-hook-form";
import * as yup from "yup";
import { FormControlLabel, FormControl, Radio, RadioGroup, Grid } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";

export interface SignUpAccountTypeInputs {
    isGroup: null | IsGroupOptionsEnum
}

export enum IsGroupOptionsEnum {
    TRUE = 'true',
    FALSE = 'false'
}

export interface SignUpAccountTypeFormProps {
    onComplete: (input: SignUpAccountTypeInputs) => Promise<void>;
    isFormActive?: boolean;
    formId?: string;
}

export function SignUpAccountTypeForm({ onComplete, isFormActive, formId }: SignUpAccountTypeFormProps) {
    const defaultValues = {
        isGroup: null,
    } as SignUpAccountTypeInputs

    const schema = yup.object().shape({
        isGroup: yup.mixed<IsGroupOptionsEnum>().required("Inform if it's a group account").oneOf(
            Object.values(IsGroupOptionsEnum).map((value) => value as IsGroupOptionsEnum), "Invalid value for inform if account is a group"),
    });


    const { register, handleSubmit, watch, reset
    } = useForm<SignUpAccountTypeInputs>({
        defaultValues,
        resolver: yupResolver<SignUpAccountTypeInputs>(schema),
    });
    const onSubmit: SubmitHandler<SignUpAccountTypeInputs> = useCallback(async (data: SignUpAccountTypeInputs) => await onComplete(data), [onComplete]);

    const isGroup = watch('isGroup')

    useEffect(() => {
        if (isGroup) {
            handleSubmit(onSubmit)()
        }
    }, [isGroup, handleSubmit, onSubmit])

    useEffect(() => {
        if (isFormActive) {
            reset()
        }
    }, [isFormActive, reset])

    return (<form id={formId} onSubmit={handleSubmit(onSubmit)}>
        <fieldset>
            <Grid container alignItems="center" rowSpacing={2} direction="column">

                <Grid item xs={12} lg={4} >
                    <FormControl>
                        <RadioGroup
                            row
                            aria-labelledby="demo-form-control-label-placement"
                        >
                            <FormControlLabel
                                {...register('isGroup', { required: true })}
                                control={<Radio
                                />}
                                label="Individual"
                                labelPlacement="top"
                                value={IsGroupOptionsEnum.FALSE}
                            />
                            <FormControlLabel
                                {...register('isGroup', { required: true })}
                                control={<Radio />}
                                label="Grupo"
                                labelPlacement="top"
                                value={IsGroupOptionsEnum.TRUE}
                            />
                        </RadioGroup>
                    </FormControl>
                </Grid>

            </Grid>
        </fieldset>
    </form>)
}
