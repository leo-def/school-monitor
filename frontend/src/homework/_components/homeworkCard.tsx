import React from "react"
import { Card, CardContent, Typography, Chip } from "@mui/material"
import { Homework } from "../_types/homework"
import { format, isBefore } from "date-fns"
import { GradeCard } from "@/grade/_components/gradeCard"

export function HomeworkCard({ item }: { item: Homework }) {
    const deliveryDateStr = item.deliveryDate ? (' Entrega: ' + format(item.deliveryDate, 'dd/MM/yyyy')) : ''
    
    const dateStr = item.date ? `Data: ${format(item.date, 'dd/MM/yyyy')}` : ''
    const deadlineStr = item.deadline ? `Prazo: ${format(item.deadline, 'dd/MM/yyyy')}`: ''
    const color = (
        (!item.deliveryDate && isBefore(item.deadline, new Date())) ||
        (item.deliveryDate && isBefore(item.deadline, item.deliveryDate))
    )? "error" : (item.deliveryDate ? "success": "warning")
    return (<Card sx={{ maxWidth: 500, minWidth: 200 }}>
        <CardContent>
        <Chip label={`${item.status}${deliveryDateStr}`} color={color} />
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                {item.title} 
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {dateStr} <br/>
                {deadlineStr}
            </Typography>
            <Typography variant="body2">
                {item.desc}
            </Typography>
            {item.grade ? <GradeCard item={item.grade} /> : undefined}
        </CardContent>
    </Card>)
}