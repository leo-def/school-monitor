import { Card, CardContent, Grid } from "@mui/material";
import React from "react";
import { useGetManageContextValue } from "../../../_hooks/useGetManageContextValue";

export interface CardGridItemProps { readonly item: any }
export function CardGridItem({ item }: CardGridItemProps) {
    const {
        config: {
            collection: { grid }
        }
    } = useGetManageContextValue()
    const { ItemDisplay } = grid
    return (<Grid item>
        <Card>
            <CardContent>
                {ItemDisplay ? <ItemDisplay item={item} /> : undefined}
            </CardContent>
        </Card>
    </Grid>)
}