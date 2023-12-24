'use client'

import React, { useCallback } from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import Link from 'next/link';
import {
    Menu as MenuIcon
} from '@mui/icons-material';
import { MobileSessionMenu } from '@/session/_components/mobileSessionMenu';
import { MobileSessionNavbar } from '@/session/_components/mobileSessionNavbar';
import { WebSessionNavbar } from '@/session/_components/webSessionNavbar';
import { MobileProtectedNavbarMenu } from './mobile/mobileProtectedNavbarMenu';
import { MobileProtectedNavbarOptions } from './mobile/mobileProtectedNavbarOptions';
import { WebProtectedNavbarOptions } from './web/webProtectedNavbarOptions';
import { WebProfileNavbarMenu } from './web/webProfileNavbarMenu';
import { NavbarWrapper } from './navbarWrapper';
import { useToggleSidebarOpen } from '@/commons/sidebar/_hooks/useToggleSidebarOpen';


export function Navbar() {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
        React.useState<null | HTMLElement>(null);
    const [sessionMoreAnchorEl, setSessionMoreAnchorEl] =
        React.useState<null | HTMLElement>(null);
    const toggleSidebarOpen = useToggleSidebarOpen()
    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
    const isSessionMenuOpen = Boolean(sessionMoreAnchorEl);

    const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setMobileMoreAnchorEl(null);
        setAnchorEl(null);
        setSessionMoreAnchorEl(null);
    };

    const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const handleSessionMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setSessionMoreAnchorEl(event.currentTarget);
    };

    const menuId = 'navbar-menu';
    const mobileMenuId = 'navbar-menu-mobile';
    const sessionMenuId = 'navbar-menu-session';

    const toggleSidebar = useCallback(
        () => toggleSidebarOpen(),
        [toggleSidebarOpen],
    )

    return (
        <React.Fragment>
            <NavbarWrapper>
                <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }} onClick={toggleSidebar}>
                    <MenuIcon />
                </IconButton>
                <Link href="/" passHref>
                    <Typography variant="h6" component="div">Monitor Escolar </Typography>
                </Link>
                <Box sx={{ flexGrow: 1 }} />
                <WebSessionNavbar />
                <MobileSessionNavbar
                    menuId={sessionMenuId}
                    handleMenuOpen={handleSessionMenuOpen} />
                <MobileProtectedNavbarOptions
                    menuId={mobileMenuId}
                    handleMenuOpen={handleMobileMenuOpen} />
                <WebProtectedNavbarOptions
                    menuId={menuId}
                    handleMenuOpen={handleProfileMenuOpen} />
            </NavbarWrapper>
            <MobileProtectedNavbarMenu
                menuId={mobileMenuId}
                anchorEl={mobileMoreAnchorEl}
                isMenuOpen={isMobileMenuOpen}
                handleMenuClose={handleClose}
                handleProfileMenuOpen={handleProfileMenuOpen} />
            <WebProfileNavbarMenu
                menuId={menuId}
                anchorEl={anchorEl}
                isMenuOpen={isMenuOpen}
                handleMenuClose={handleClose} />
            <MobileSessionMenu
                menuId={sessionMenuId}
                anchorEl={sessionMoreAnchorEl}
                isMenuOpen={isSessionMenuOpen}
                handleMenuClose={handleClose} />
        </React.Fragment>)
}



