"use client";

import React, { useCallback, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Card, CardContent, Typography, CardActions, Stepper, Step, StepContent, StepLabel, Button, Grid } from "@mui/material";
import { SignUpAccountTypeForm, SignUpAccountTypeInputs } from "./_components/signUpAccountTypeForm";
import { SignUpAuthForm, SignUpAuthInputs } from "./_components/signUpAuthForm";
import { SignUpProfileForm, SignUpProfileInputs } from "./_components/signUpProfileForm";
import { SignUpReferenceForm, SignUpReferenceInputs } from "./_components/signUpReferenceForm";
import { useApiFetch } from "@/commons/api/_hooks/useApiFetch";
import { useAddMessage } from "@/commons/message/_hooks/useAddMessage";
import { MessageSeverityEnum } from "@/commons/message/_enums/messageSeverity.enum";

export interface SignUpFormInputs {
    accountType?: SignUpAccountTypeInputs
    profile?: SignUpProfileInputs
    auth?: SignUpAuthInputs
    reference?: SignUpReferenceInputs
}

export default function SignUpPage() {
    const router = useRouter()
    const apiFetch = useApiFetch()
    const addMessage = useAddMessage()


    const [inputs, setInputs] = useState({} as SignUpFormInputs)


    const signUp = useCallback((data: SignUpFormInputs) => {
        apiFetch('auth/sign-up', { method: 'POST', body: JSON.stringify(data) })
            .then(async (response) => {
                const data = await response.json()
                if (data.error) {
                    addMessage({ title: data.error, severity: MessageSeverityEnum.ERROR })
                } else {
                    addMessage({ title: 'SignUp Success', severity: MessageSeverityEnum.SUCCESS })
                    router.push('/')
                }
            })
    }, [apiFetch, addMessage, router])


    const [activeStep, setActiveStep] = useState(0);
    const isFirstStep = useMemo(() => activeStep === 0, [activeStep])
    const isLastStep = useMemo(() => activeStep === 3, [activeStep])

    const handleNext = useCallback(() => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }, [setActiveStep]);

    const handleBack = useCallback(() => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    }, [setActiveStep]);


    const handleSignUpAccountTypeFormSubmit = useCallback(async (accountType: SignUpAccountTypeInputs) => {
        setInputs(inputs => ({ ...inputs, accountType }))
        handleNext()
    }, [setInputs, handleNext])

    const handleSignUpAuthFormSubmit = useCallback(async (auth: SignUpAuthInputs) => {
        setInputs(inputs => ({ ...inputs, auth }))
        handleNext()
    }, [setInputs, handleNext])

    const handleSignUpProfileFormSubmit = useCallback(async (profile: SignUpProfileInputs) => {
        setInputs(inputs => ({ ...inputs, profile }))
        handleNext()
    }, [setInputs, handleNext])

    const handleSignUpReferenceFormSubmit = useCallback(async (reference: SignUpReferenceInputs) => {
        signUp({ ...inputs, reference })
    }, [signUp, inputs])

    return (
        <Card>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Entrar {/* i18n */}
                </Typography>

                <Stepper activeStep={activeStep} orientation="vertical">
                    <Step key={"Tipo de conta"}>
                        <StepLabel > {"Tipo de conta"}
                        </StepLabel>
                        <StepContent>
                            <SignUpAccountTypeForm formId="signUpAccountTypeForm" onComplete={handleSignUpAccountTypeFormSubmit} isFormActive={activeStep === 0} />
                        </StepContent>
                    </Step>

                    <Step key={"Autenticação"}>
                        <StepLabel > {"Autenticação"}
                        </StepLabel>
                        <StepContent>
                            <SignUpAuthForm formId="signUpAuthForm" onComplete={handleSignUpAuthFormSubmit} isFormActive={activeStep === 1} />
                        </StepContent>
                    </Step>

                    <Step key={"Perfil"}>
                        <StepLabel > {"Perfil"}
                        </StepLabel>
                        <StepContent>
                            <SignUpProfileForm formId="signUpProfileForm" onComplete={handleSignUpProfileFormSubmit} isFormActive={activeStep === 2} />
                        </StepContent>
                    </Step>

                    <Step key={"Indicação"}>
                        <StepLabel > {"Indicação"}
                        </StepLabel>
                        <StepContent>
                            <SignUpReferenceForm formId="signUpReferenceForm" onComplete={handleSignUpReferenceFormSubmit} isFormActive={activeStep === 3} />
                        </StepContent>
                    </Step>
                </Stepper>

            </CardContent>
            <CardActions>
                <Grid container>
                    <Grid item>
                        {!isFirstStep
                            ? <Button onClick={handleBack}>Voltar {/* i18n */}</Button>
                            : null
                        }
                    </Grid>
                    <Grid item>
                        {!isLastStep
                            ? <Button onClick={handleNext}>Avançar {/* i18n */}</Button>
                            : null
                        }

                        {isLastStep
                            ? <Button type="submit" form="signUpReferenceForm" >Enviar {/* i18n */}</Button>
                            : null
                        }
                    </Grid>
                    <Grid item>
                        <Link href="/forgot-password" passHref> <Button>Esqueceu a senha</Button> {/* i18n */}</Link>
                    </Grid>
                </Grid>
            </CardActions>
        </Card>
    )
}