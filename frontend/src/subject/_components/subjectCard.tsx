
import React from "react"
import { Card, CardContent, Grid, Typography } from "@mui/material"
import { Subject } from "../_types/subject"
import { TeacherDetails } from "@/teacher/_components/teacherDetails"

export function SubjectCard({ item }: { item: Subject }) {
    return (<Card sx={{ width: 260, minHeight: 150 }}>
        <CardContent>
            <Grid container rowSpacing={0.5}>
                <Grid item xs={12}>
                    <Typography sx={{ fontSize: 14, fontWeight: 600 }} color="text.secondary">
                        {item.title}
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <hr />
                </Grid>
                <Grid container item xs={12} justifyContent="center">
                    <TeacherDetails item={item.teacher} />
                </Grid>
            </Grid>
        </CardContent>
    </Card>)
}