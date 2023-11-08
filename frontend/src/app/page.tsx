
import React from "react";
import { Button, Card, CardActions, CardContent, Grid, Typography } from "@mui/material";
import { NavItemLink } from "@/nav/_components/navItemLink";

export default function Home() {
  return (
    <Grid container spacing={2}>
      <Grid item>
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              Painel administrativo
            </Typography>
          </CardContent>
          <CardActions>
            <NavItemLink index={0} path="manager" >
              <Button size="small">Abrir</Button>
            </NavItemLink>
          </CardActions>
        </Card>
      </Grid>
    </Grid >)
}
