import React from "react"
import { Card, CardContent, Typography, CardActions, Button, CardMedia } from "@mui/material"
import { Teacher } from "../_types/teacher"
import { NavItemLink } from "@/nav/_components/navItemLink"
import { useGetNavByType } from "@/nav/_hooks/useGetNavByType"

export function TeacherCard({ item }: { item: Teacher }) {
    const teacherNavItem = useGetNavByType("teacher")
    return (<Card sx={{ width: 260 }}>
        <CardMedia
            sx={{ height: 140 }}
            image={item.img}
            title={item.name}
        />
        <CardContent>
            <Typography sx={{ fontSize: 14, fontWeight: 600 }} color="text.secondary">
                Professor # {item.name}
            </Typography>
        </CardContent>
        {!teacherNavItem ?
            <CardActions>
                <NavItemLink path={`teacher/${item.id}`}>
                    <Button size="small">Abrir</Button>
                </NavItemLink>
            </CardActions> : undefined}
    </Card>)
}