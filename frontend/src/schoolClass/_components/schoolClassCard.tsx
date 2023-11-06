import React from "react"
import { Card, CardContent, Typography, CardActions, Button } from "@mui/material"
import { SchoolClass } from "../_types/schoolClass"
import { NavItemLink } from "@/nav/_components/navItemLink"
import { useGetNavByType } from "@/nav/_hooks/useGetNavByType"

export function SchoolClassCard({ item }: { item: SchoolClass }) {
    const schoolClassNavItem = useGetNavByType("schoolClass")
    return (<Card sx={{ width: 260 }}>
        <CardContent>
            <Typography sx={{ fontSize: 14, fontWeight: 600 }} color="text.secondary">
                {item.title}
            </Typography>
        </CardContent>
        {!schoolClassNavItem ?
            <CardActions>
                <NavItemLink path={`schoolClass/${item.id}`}>
                    <Button size="small">Abrir</Button>
                </NavItemLink>
            </CardActions> : undefined}
    </Card>)
}