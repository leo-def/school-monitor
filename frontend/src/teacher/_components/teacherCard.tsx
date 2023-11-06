import React from "react"
import { Card, CardContent, Typography, CardActions, Button, CardMedia } from "@mui/material"
import { Teacher } from "../_types/teacher"
import { NavItemLink } from "@/nav/_components/navItemLink"
import { NavItemTypeEnum } from "@/nav/_enums/navItemType.enum"

export function TeacherCard({ item }: { item: Teacher }) {
    return (<Card sx={{ width: 260 }}>
        <CardMedia
            sx={{ height: 140 }}
            image={item.img}
            title={item.name}
        />
        <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                Professor # {item.name}
            </Typography>
        </CardContent>
        <CardActions>
            <NavItemLink path={`teacher/${item.id}`}>
                <Button size="small">Abrir</Button>
            </NavItemLink>
        </CardActions>
    </Card>)
}