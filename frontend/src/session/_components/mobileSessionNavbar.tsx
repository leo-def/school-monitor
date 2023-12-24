import { Box, IconButton } from "@mui/material"
import { MouseEventHandler } from "react"
import { Domain as DomainIcon } from '@mui/icons-material';

export interface MobileSessionNavbarProps {
    readonly menuId: string
    readonly handleMenuOpen?: MouseEventHandler<HTMLButtonElement>
}

export function MobileSessionNavbar({ menuId, handleMenuOpen }: MobileSessionNavbarProps) {
    return (<Box sx={{ display: { xs: 'flex', md: 'none' } }}>
        <IconButton
            size="large"
            aria-label="show more"
            aria-controls={menuId}
            aria-haspopup="true"
            onClick={handleMenuOpen}
            color="inherit"
        >
            <DomainIcon />
        </IconButton>
    </Box>)
}
