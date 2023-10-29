import apiFetch from "@/api"
import { Grid, Card, CardContent, Typography, CardActions, Button, CardMedia } from "@mui/material"
import Link from "next/link"
import React from "react"
import { Absence } from "../_types/absence"

export function AbsenceList() {
    const absences = apiFetch('/absences') as Array<Absence>
    return (<React.Fragment>
        <Grid container spacing={2} justifyContent="center" alignItems="center">
            {absences.map((item) => (<Grid item key={item.id}>
                <Card sx={{ maxWidth: 345 }}>
                    <CardContent>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            {item.desc}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Link href={`/absence/${item.id}`} passHref>
                            <Button size="small">Abrir</Button>
                        </Link>
                    </CardActions>
                </Card>
            </Grid>))}
        </Grid>
    </React.Fragment>)
}