
import React from "react"
import { Card, CardContent, Typography } from "@mui/material"
import { Subject } from "../_types/subject"

export function SubjectCard({ item }: { item: Subject }) {
    return (<Card sx={{ width: 260 }}>
        <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                {item.title}
            </Typography>
        </CardContent>
    </Card>)
}