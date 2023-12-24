import { Grid } from "@mui/material";
import React from "react";
import { useGetManageContextValue } from "../../../_hooks/useGetManageContextValue";

export interface CardGridItemProps { readonly item: any }
export function CardGridItem({ item }: CardGridItemProps) {
    const {
        config: {
            collection: { grid: { itemDisplay } }
        }
    } = useGetManageContextValue()
    const itemDisplayWithProps = React.Children.map(itemDisplay, child => {
        if (React.isValidElement(child)) {
            return React.cloneElement(child, { item } as any);
        }
        return child;
    });
    return (<Grid item>{itemDisplayWithProps}</Grid>)
}