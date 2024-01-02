import React from "react";
import { Card, CardContent, Grid, Typography } from "@mui/material";
import { format } from "date-fns";

export function NotificationCard({ item }: { item: any }) {
    return (<Card sx={{ width: 260, minHeight: 150 }}>
        <CardContent>
            <Grid container rowSpacing={0.5}>
                <Grid item xs={12}>
                    <Typography sx={{ fontSize: 14, fontWeight: 600 }} color="text.secondary">
                        {item.title}
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <hr />
                </Grid>
                <Grid item xs={12}>
                    <Typography sx={{ fontSize: 12, mb: 1.5 }} color="text.secondary">
                        {item.date ? format(item.date, 'dd/MM/yyyy') : ''}
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="body2" sx={{ fontSize: 10 }}>
                        {item.desc}
                    </Typography>
                </Grid>
            </Grid>
        </CardContent>
    </Card>)
}