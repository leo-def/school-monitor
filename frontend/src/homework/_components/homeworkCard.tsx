import React from "react"
import { Card, CardContent, Typography, Chip, Grid } from "@mui/material"
import { Homework } from "../_types/homework"
import { format, isBefore } from "date-fns"
import { GradeDetails } from "@/grade/_components/gradeDetails"

export function HomeworkCard({ item }: { item: Homework }) {
    const deliveryDateStr = item.deliveryDate ? format(item.deliveryDate, 'dd/MM/yyyy') : ''

    const dateStr = item.date ? `Data: ${format(item.date, 'dd/MM/yyyy')}` : ''
    const deadlineStr = item.deadline ? `Prazo: ${format(item.deadline, 'dd/MM/yyyy')}` : ''
    const deliveryDateColor = (item.deliveryDate ? "success" : "warning")
    const color = (
        (!item.deliveryDate && isBefore(item.deadline, new Date())) ||
        (item.deliveryDate && isBefore(item.deadline, item.deliveryDate))
    ) ? "error" : deliveryDateColor
    const statusLables = {
        DELIVERED: "Entregue",
        PENDING: "Pendente",
        PENDING_LATE: "Pendente atrasado",
        LATE: "Atrasado",
    } as { [x: string]: string }

    return (<Card sx={{ width: 260, minHeight: 260 }}>
        <CardContent>
            <Grid container rowSpacing={0.5}>
                <Grid container item xs={12} justifyContent="space-between">
                    <Grid item xs="auto">
                        <Typography sx={{ fontSize: 14 }} color="text.secondary">
                            {item.title}
                        </Typography>
                    </Grid>
                    <Grid item> <Chip label={`${statusLables[item.status]} ${deliveryDateStr}`} color={color} size="small" />   </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Typography sx={{ fontSize: 12 }} color="text.secondary">
                        {dateStr} <br />
                        {deadlineStr}
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="body2" sx={{ fontSize: 10 }}>
                        {item.desc}
                    </Typography>
                </Grid>
                <Grid container item xs={12} justifyContent="center">
                    <Grid item><GradeDetails item={item.grade} /></Grid>
                </Grid>
            </Grid>
        </CardContent>
    </Card>)
}