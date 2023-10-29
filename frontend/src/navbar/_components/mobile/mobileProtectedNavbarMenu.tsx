import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { MouseEventHandler } from 'react';
import { PopoverProps } from '@mui/material';

export interface MobileProtectedNavbarMenuProps {
    anchorEl: PopoverProps['anchorEl']
    isMenuOpen: boolean
    menuId: string
    handleMenuClose?: MouseEventHandler<HTMLLIElement>
    handleProfileMenuOpen?: MouseEventHandler<HTMLLIElement>
}

export function MobileProtectedNavbarMenu({
    anchorEl,
    isMenuOpen,
    menuId,
    handleMenuClose,
    handleProfileMenuOpen
}: MobileProtectedNavbarMenuProps) {
    const notifications = 0;
    return (<Menu
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
        open={isMenuOpen}
        onClose={handleMenuClose}
    >
        <MenuItem>
            <IconButton
                size="large"
                aria-label={`show ${notifications} new notifications`}
                color="inherit"
            >
                <Badge badgeContent={notifications} color="error">
                    <NotificationsIcon />
                </Badge>
            </IconButton>
            <p>Notifications</p>
        </MenuItem>
        <MenuItem onClick={handleProfileMenuOpen}>
            <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="primary-search-account-menu"
                aria-haspopup="true"
                color="inherit"
            >
                <AccountCircle />
            </IconButton>
            <p>Profile</p>
        </MenuItem>
    </Menu>
    )
}
