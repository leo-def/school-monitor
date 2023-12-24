import { PropsWithChildren } from "react";
import { Grid } from "@mui/material";
import { NavBreadcrumbs } from "./navBreadcrumbs";
import React from "react";

export function NavWrapper({ children }: PropsWithChildren) {
    return (<React.Fragment>
        <NavBreadcrumbs />
        {children}
    </React.Fragment>)
}