import React from "react";
import { Card, CardContent, Typography, CardActions, Button } from "@mui/material";
import { NavItemLink } from "@/commons/nav/_components/navItemLink";
import { useGetNavByType } from "@/commons/nav/_hooks/useGetNavByType";
import { SchoolClassDto } from "../_types/schoolClass.dto";


export function SchoolClassCard({ item }: { item: SchoolClassDto }) {
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
