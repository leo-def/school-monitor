import { PropsWithChildren } from "react";
import { Grid } from "@mui/material";
import { NavBreadcrumbs } from "./navBreadcrumbs";

export function NavWrapper({ children }: PropsWithChildren) {
    return (<Grid container>
        <Grid item xs={12}>
            <NavBreadcrumbs />
        </Grid>
        <Grid item xs={12}>
            {children}
        </Grid>
    </Grid>)
}