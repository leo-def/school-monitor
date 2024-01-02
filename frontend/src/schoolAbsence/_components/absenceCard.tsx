
import React from "react";
import { format } from "date-fns";
import { Card, CardContent, Chip, Grid, Paper, Typography } from "@mui/material";


export function AbsenceCard({ item }: { item: any }) {

    const startDateStr = item.start ? format(item.start, 'dd/MM/yyyy') : '';
    const startTimeStr = item.end ? format(item.end, 'HH:mm') : '';
    const endTimeStr = item.end ? format(item.end, 'HH:mm') : '';
    return (<Card sx={{ maxWidth: 345, minHeight: 200 }}>
        <CardContent>
            <Grid container rowSpacing={0.5}>
                <Grid container item xs={12} justifyContent="space-between">
                    <Grid item xs="auto">
                        <Typography sx={{ fontSize: 14, fontWeight: 600 }} color="text.secondary">
                            {item.desc || 'Falta'}
                        </Typography>
                    </Grid>
                    {item.hasJustification ? <Grid item xs={4}>
                        <Chip label="Abonado" color="success" size="small" />
                    </Grid> : <Chip label="Não abonado" color="error" size="small" />}
                </Grid>
                <Grid item xs={12}>
                    <hr />
                </Grid>
                <Grid item xs={12}>
                    <Typography sx={{ fontSize: 12 }} color="text.secondary">
                        {startDateStr}
                        <Typography sx={{ fontSize: 10 }} component="span">
                            {item.fullDay ? '' : ` das ${startTimeStr} até ${endTimeStr}`}
                        </Typography>
                    </Typography>
                </Grid>
                {item.hasJustification ?
                    <Grid item xs={12}>
                        <Paper elevation={3} sx={{ fontSize: 10, minWidth: 200, width: '100%', padding: 1, margin: 0, }}>

                            <Typography sx={{ fontSize: 12 }} color="text.secondary">
                                Justificativa:
                            </Typography>
                            <hr />
                            <span style={{ paddingLeft: 6 }}>
                                {item.justification}
                            </span>
                        </Paper>
                    </Grid>
                    : undefined}
            </Grid>
        </CardContent>
    </Card>)
}

/*

  id: string;
  desc: string;
  hasJustification: boolean;
  justification: string;
  start: Date;
  end: Date;
  fullDay: boolean;
*/