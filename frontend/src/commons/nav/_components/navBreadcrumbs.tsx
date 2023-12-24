'use client'

import React from "react";
import { Breadcrumbs, Typography } from "@mui/material";
import { useGetNavItems } from "../_hooks/useGetNavItems";
import Link from "next/link";

export function NavBreadcrumbs() {
    const navItems = useGetNavItems().filter(item => item.label)
    return (<Breadcrumbs aria-label="breadcrumb">
            {navItems.map((nav, index) => (index < navItems.length - 1)
                ? (<Link key={`${nav.index} - ${nav.path}`} href={nav.href ?? ''} passHref>{nav.label}</Link>)
                : <Typography key={`${nav.index} - ${nav.path}`} color="text.primary">{nav.label}</Typography>)}
        </Breadcrumbs>);
}
