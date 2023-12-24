import React from "react";
import { Search as SearchIcon } from "@mui/icons-material";
import { FormControl, InputLabel, InputAdornment, Input, Pagination, Grid } from "@mui/material";

export function ListHeader() {
    return (
        <Grid container alignItems="flex-end">
            <Grid item>
                <Pagination count={10} color="primary" />
            </Grid>
            <Grid item>
                <FormControl sx={{ width: '25ch' }} variant="standard">
                    <InputLabel htmlFor="standard-adornment-password">Pesquisar</InputLabel>
                    <Input
                        id="standard-adornment-password"
                        type="text"
                        endAdornment={
                            <InputAdornment position="end">
                                <SearchIcon />
                            </InputAdornment>
                        }
                    />
                </FormControl>
            </Grid >
        </Grid >)
}