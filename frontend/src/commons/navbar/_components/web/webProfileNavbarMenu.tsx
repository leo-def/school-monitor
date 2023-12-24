import * as React from 'react';
import { MouseEventHandler } from 'react';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { PopoverProps } from '@mui/material';
import Link from 'next/link';

export interface WebProfileNavbarMenuProps {
    readonly anchorEl: PopoverProps['anchorEl']
    readonly isMenuOpen: boolean
    readonly menuId: string
    readonly handleMenuClose?: MouseEventHandler<HTMLLIElement>
}

export function WebProfileNavbarMenu({ anchorEl, isMenuOpen, menuId, handleMenuClose }: WebProfileNavbarMenuProps) {
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
        <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
        <Link href='logout'><MenuItem onClick={handleMenuClose}>Logout</MenuItem></Link>
    </Menu >)
}


