import React from "react"
import { Card, CardContent, Typography, CardMedia } from "@mui/material"
import { Parent } from "../_types/parent"

export function ParentCard({ item }: { item: Parent }) {
    return (<Card sx={{ width: 260 }}>
        <CardMedia
            sx={{ height: 140 }}
            image={item.img}
            title={item.name}
        />
        <CardContent>
            <Typography sx={{ fontSize: 14, fontWeight: 600 }} color="text.secondary">
                {item.name}
            </Typography>
        </CardContent>
    </Card>)
}