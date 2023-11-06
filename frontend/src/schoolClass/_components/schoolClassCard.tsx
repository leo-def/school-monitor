import React from "react"
import { Card, CardContent, Typography, CardActions, Button } from "@mui/material"
import { SchoolClass } from "../_types/schoolClass"
import { NavItemLink } from "@/nav/_components/navItemLink"
import { NavItemTypeEnum } from "@/nav/_enums/navItemType.enum"

export function SchoolClassCard({ item }: { item: SchoolClass }) {
    return (<Card sx={{ width: 260 }}>
        <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                {item.title}
            </Typography>
        </CardContent>
        <CardActions>
            <NavItemLink path={`schoolClass/${item.id}`}>
                <Button size="small">Abrir</Button>
            </NavItemLink>
        </CardActions>
    </Card>)
}