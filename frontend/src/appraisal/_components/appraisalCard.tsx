import React from "react"
import { format } from "date-fns"
import { Card, CardContent, Typography } from "@mui/material"
import { Appraisal } from "../_types/appraisal"
import { GradeCard } from "@/grade/_components/gradeCard"

export function AppraisalCard({ item }: { item: Appraisal }) {
    return (<Card sx={{ maxWidth: 500, minWidth: 200 }}>
        <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                {item.title}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {item.date ? (' - ' + format(item.date, 'dd/MM/yyyy')) : ''}
            </Typography>
            <Typography variant="body2">
                {item.desc}
            </Typography>
            {item.grade ? <GradeCard item={item.grade} /> : undefined}
        </CardContent>
    </Card>)
}
