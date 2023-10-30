import apiFetch from "@/api"
import {  Card, CardContent, Typography } from "@mui/material"
import React from "react"
import { Absence } from "../_types/absence"

export function AbsenceCard({ item }: { item: Absence }) {
    return ( <Card sx={{ maxWidth: 345 }}>
                    <CardContent>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            {item.desc}
                        </Typography>
                    </CardContent>
                </Card>)
}