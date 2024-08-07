import React, { MouseEventHandler } from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import AccountCircle from "@mui/icons-material/AccountCircle";
import NotificationsIcon from "@mui/icons-material/Notifications";

export interface WebProtectedNavbarOptionsProps {
  readonly menuId: string
  readonly handleMenuOpen?: MouseEventHandler<HTMLButtonElement | HTMLLIElement>
}

export function WebProtectedNavbarOptions({ menuId, handleMenuOpen }: WebProtectedNavbarOptionsProps) {
  const notifications = 0;
  return (<Box sx={{ display: { xs: 'none', md: 'flex' } }}>
    <IconButton
      size="large"
      aria-label={`show ${notifications} new notifications`}
      color="inherit"
    >
      <Badge badgeContent={notifications} color="error">
        <NotificationsIcon />
      </Badge>
    </IconButton>
    <IconButton
      size="large"
      edge="end"
      aria-label="account of current user"
      aria-controls={menuId}
      aria-haspopup="true"
      onClick={handleMenuOpen}
      color="inherit"
    >
      <AccountCircle />
    </IconButton>
  </Box>)
}
