import { Button, Card, CardActions, CardContent, Grid, Typography } from "@mui/material";
import { NavItemLink } from "@/nav/_components/navItemLink";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Grid container spacing={2}>
        <Grid item>
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                Painel administrativo
              </Typography>
            </CardContent>
            <CardActions>
              <NavItemLink path="manager" >
                <Button size="small">Abrir</Button>
              </NavItemLink>
            </CardActions>
          </Card>
        </Grid>

        <Grid item>
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                Painel dos pais
              </Typography>
            </CardContent>
            <CardActions>
              <NavItemLink path="parent" >
                <Button size="small">Abrir</Button>
              </NavItemLink>
            </CardActions>
          </Card>
        </Grid>

        <Grid item>
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                Painel do aluno
              </Typography>
            </CardContent>
            <CardActions>
              <NavItemLink path="student" >
                <Button size="small">Abrir</Button>
              </NavItemLink>
            </CardActions>
          </Card>
        </Grid>

        <Grid item>
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                Painel do professor
              </Typography>
            </CardContent>
            <CardActions>
              <NavItemLink path="teacher" >
                <Button size="small">Abrir</Button>
              </NavItemLink>
            </CardActions>
          </Card>
        </Grid>
      </Grid >
    </main >
  )
}
