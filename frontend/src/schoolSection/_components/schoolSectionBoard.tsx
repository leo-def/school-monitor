import { Grid } from "@mui/material";
import { SchoolSectionContextProvider } from "./schoolSectionContextProvider";
import { SchoolSectionFilter } from "./schoolSectionFilter/schoolSectionFilter";
import { SchoolSectionTabs } from "./schoolSectionTabs";

export function SchoolSectionBoard() {

    return (<SchoolSectionContextProvider>
        <Grid container>
            <Grid item xs={12}>
                <SchoolSectionFilter />
            </Grid>
            <Grid item xs={12}>
                <SchoolSectionTabs />
            </Grid>
        </Grid>
    </SchoolSectionContextProvider>)
}