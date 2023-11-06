import React from "react"
import { Card, CardContent, Typography, CardActions, Button, CardMedia } from "@mui/material"
import { Student } from "../_types/student"
import { NavItemLink } from "@/nav/_components/navItemLink"
import { useGetNavByType } from "@/nav/_hooks/useGetNavByType"

export function StudentCard({ item }: { item: Student }) {
    const studentNavItem = useGetNavByType("student")
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
        {!studentNavItem ?
            <CardActions>
                <NavItemLink path={`student/${item.id}`}>
                    <Button size="small">Abrir</Button>
                </NavItemLink>
            </CardActions> : undefined}
    </Card>)
}