import * as React from 'react';
import { MouseEventHandler, PropsWithChildren } from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MoreIcon from '@mui/icons-material/MoreVert';

export interface MobileProtectedNavbarOptionsProps {
  menuId: string
  handleMenuOpen?: MouseEventHandler<HTMLButtonElement>
}

export function MobileProtectedNavbarOptions({ menuId, handleMenuOpen }: MobileProtectedNavbarOptionsProps) {
  return (
    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
      <IconButton
        size="large"
        aria-label="show more"
        aria-controls={menuId}
        aria-haspopup="true"
        onClick={handleMenuOpen}
        color="inherit"
      >
        <MoreIcon />
      </IconButton>
    </Box>)
}
