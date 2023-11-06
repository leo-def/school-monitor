import React from "react"
import { Card, CardContent, Typography, CardActions, Button, CardMedia } from "@mui/material"
import { Manager } from "../_types/manager"
import { NavItemLink } from "@/nav/_components/navItemLink"
import { NavItemTypeEnum } from "@/nav/_enums/navItemType.enum"

export function ManagerCard({ item }: { item: Manager }) {
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
        <CardActions>
            <NavItemLink path={item.id}>
                <Button size="small">Abrir</Button>
            </NavItemLink>
        </CardActions>
    </Card>)
}