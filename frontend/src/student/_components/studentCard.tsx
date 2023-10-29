import React from "react"
import { Card, CardContent, Typography, CardActions, Button, CardMedia } from "@mui/material"
import { Student } from "../_types/student"
import { NavItemLink } from "@/nav/_components/navItemLink"
import { NavItemTypeEnum } from "@/nav/_enums/navItemType.enum"

export function StudentCard({ item }: { item: Student }) {
    return (<Card sx={{ maxWidth: 345 }}>
        <CardMedia
            sx={{ height: 140 }}
            image={item.img}
            title={item.name}
        />
        <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                {item.name}
            </Typography>
        </CardContent>
        <CardActions>
            <NavItemLink
                type={NavItemTypeEnum.STUDENT}
                path={`student/${item.id}`}
                object={item}>
                <Button size="small">Abrir</Button>
            </NavItemLink>
        </CardActions>
    </Card>)
}