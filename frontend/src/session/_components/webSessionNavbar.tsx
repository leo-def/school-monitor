import { Box } from "@mui/material";
import { SessionForm } from "./sessionForm";

export function WebSessionNavbar() {
  return (
    <Box sx={{ display: { xs: "none", md: "flex" }, flexGrow: 1 }}>
      <SessionForm />
    </Box>
  );
}
