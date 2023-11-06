import React from "react";
import { Visibility } from "@mui/icons-material";
import { FormControl, InputLabel, InputAdornment, Input, Pagination, Grid } from "@mui/material";

export function ListHeader() {
    return (
        <Grid container alignItems="flex-end">
            <Grid item>
                <Pagination count={10} color="primary" />
            </Grid>
            <Grid item>
                <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
                    <InputLabel htmlFor="standard-adornment-password">Pesquisa</InputLabel>
                    <Input
                        id="standard-adornment-password"
                        type="text"
                        endAdornment={
                            <InputAdornment position="end">
                                <Visibility />
                            </InputAdornment>
                        }
                    />
                </FormControl>
            </Grid >
        </Grid >)
}