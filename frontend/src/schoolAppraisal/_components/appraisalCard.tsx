import React from "react"
import { format } from "date-fns"
import { Card, CardContent, Grid, Typography } from "@mui/material"
import { Appraisal } from "../_types/appraisal"
import { GradeDetails } from "@/grade/_components/gradeDetails"

export function AppraisalCard({ item }: { item: Appraisal }) {
    return (<Card sx={{ maxWidth: 345, minHeight: 200 }}>
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
                <Grid item xs={12}>
                    <Typography sx={{ fontSize: 12 }} color="text.secondary">
                        {item.date ? format(item.date, 'dd/MM/yyyy') : ''}
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="body2" sx={{ fontSize: 10 }}>
                        {item.desc}
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <GradeDetails item={item.grade} />
                </Grid>
            </Grid>
        </CardContent>
    </Card>)
}
