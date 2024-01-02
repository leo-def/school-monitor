import React, { MouseEventHandler } from "react";
import {IconButton, Badge, MenuItem, Menu, Link, PopoverProps} from "@mui/material";
import {
    AccountCircle as AccountCircleIcon,
    Notifications as NotificationsIcon,
    Logout as LogoutIcon
} from "@mui/icons-material";

export interface MobileProtectedNavbarMenuProps {
    readonly anchorEl: PopoverProps['anchorEl']
    readonly isMenuOpen: boolean
    readonly menuId: string
    readonly handleMenuClose?: MouseEventHandler<HTMLLIElement>
    readonly handleProfileMenuOpen?: MouseEventHandler<HTMLLIElement>
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
                <AccountCircleIcon />
            </IconButton>
            <p>Profile</p>
        </MenuItem>
        <Link href='logout'>
            <MenuItem onClick={handleProfileMenuOpen}>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <LogoutIcon />
                </IconButton>
                <p>Logout</p>
            </MenuItem>
        </Link>
    </Menu>
    )
}
