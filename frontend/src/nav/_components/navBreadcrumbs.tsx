'use client'

import React from "react";
import { Breadcrumbs, Typography } from "@mui/material";
import { useGetNavItems } from "../_hooks/useGetNavItems";
import { NavItemLink } from "./navItemLink";

export function NavBreadcrumbs() {
    const navItems = useGetNavItems().filter(item => item.label)
    return (<>
        <span>{JSON.stringify(navItems)}</span>
        <Breadcrumbs aria-label="breadcrumb">
            {navItems.map((nav, index) => (index === navItems.length - 1)
                ? (<NavItemLink key={`${nav.index} - ${nav.path}`} index={nav.index}>{nav.label}</NavItemLink>)
                : <Typography key={`${nav.index} - ${nav.path}`} color="text.primary">{nav.label}</Typography>)}
        </Breadcrumbs></>);
}
