import React from "react"
import apiFetch from "@/api"
import { Grid } from "@mui/material"
import { Manager } from "../_types/manager"
import { ManagerCard } from "./managerCard"

export function ManagerList() {
    const managers = apiFetch('/manager') as Array<Manager>
    return (<React.Fragment>
        <Grid container spacing={2} justifyContent="center" alignItems="center">
            {managers.map((item) => (<Grid item key={item.id}>
                <ManagerCard item={item} />
            </Grid>))}
        </Grid>
    </React.Fragment>)
}