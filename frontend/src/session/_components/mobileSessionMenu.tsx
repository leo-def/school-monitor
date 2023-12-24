import { PopoverProps, Popover, Grid, IconButton } from "@mui/material"
import { Close as CloseIcon } from '@mui/icons-material';
import { SessionForm } from "./sessionForm"

export interface MobileSessionMenuProps {
    readonly anchorEl: PopoverProps['anchorEl']
    readonly isMenuOpen: boolean
    readonly menuId: string
    readonly handleMenuClose?: () => void
}

export function MobileSessionMenu({ anchorEl, isMenuOpen, menuId, handleMenuClose }: MobileSessionMenuProps) {
    return (
        <Popover
            anchorEl={anchorEl}

            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            style={{
            }}
            slotProps={{
                paper: {
                    style: {
                        width: "100vw",
                        padding: "0.25rem",
                    },
                    sx: {
                        display: { xs: 'flex', md: 'none' }
                    },

                }
            }}
            open={isMenuOpen}
            onClose={() => handleMenuClose ? handleMenuClose() : undefined}
        >
            <Grid container>
                <Grid item xs={12}><SessionForm /></Grid>
                <Grid item container xs={12} justifyContent="flex-end">
                    <Grid item >
                        <IconButton
                            size="large"
                            aria-label="show more"
                            aria-controls={menuId}
                            aria-haspopup="true"
                            onClick={() => handleMenuClose ? handleMenuClose() : undefined}
                            color="inherit"
                        >
                            <CloseIcon />
                        </IconButton>
                    </Grid>
                </Grid>
            </Grid>
        </Popover >)
}