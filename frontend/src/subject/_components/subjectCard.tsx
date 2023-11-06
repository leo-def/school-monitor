
import React from "react"
import { Card, CardContent, Grid, Typography } from "@mui/material"
import { Subject } from "../_types/subject"
import { TeacherDetails } from "@/teacher/_components/teacherDetails"

export function SubjectCard({ item }: { item: Subject }) {
    return (<Card sx={{ width: 260, minHeight: 150 }}>
        <CardContent>
            <Grid container rowSpacing={0.5}>
                <Grid item xs={12}>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        {item.title}
                    </Typography>
                </Grid>

                <Grid container item xs={12} justifyContent="center">
                    <Grid item> <TeacherDetails item={item.teacher} /></Grid>
                </Grid>
            </Grid>
        </CardContent>
    </Card>)
}