import React from "react"
import apiFetch from "@/api"
import { Grid, Card, CardContent, Typography } from "@mui/material"
import { Grade } from "../_types/grade"

export function GradeList() {
    const grades = apiFetch('/grade') as Array<Grade>
    return (<React.Fragment>
        <Grid container spacing={2} justifyContent="center" alignItems="center">
            {grades.map((item) => (<Grid item key={item.id}>
                <Card sx={{ maxWidth: 345 }}>
                    <CardContent>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            {item.title}
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>))}
        </Grid>
    </React.Fragment>)
}
