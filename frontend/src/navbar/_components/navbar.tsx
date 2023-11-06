'use client'

import React, { PropsWithChildren } from 'react';
import { Box, Typography } from '@mui/material';
import { MobileProtectedNavbarMenu } from './mobile/mobileProtectedNavbarMenu';
import { MobileProtectedNavbarOptions } from './mobile/mobileProtectedNavbarOptions';
import { WebProtectedNavbarOptions } from './web/webProtectedNavbarOptions';
import { WebProfileNavbarMenu } from './web/webProfileNavbarMenu';
import { NavbarWrapper } from './navbarWrapper';
import Link from 'next/link';

export function Navbar({ children }: PropsWithChildren) {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
        React.useState<null | HTMLElement>(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const menuId = 'primary-search-account-menu';
    const mobileMenuId = 'primary-search-account-menu-mobile';

    return (
        <React.Fragment>
            <NavbarWrapper>
                <Link href="/" passHref>
                    <Typography variant="h6" color="inherit" component="div">Monitor Escolar </Typography>
                </Link>
                <Box sx={{ flexGrow: 1 }} />
                {children}
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
                handleMenuClose={handleMobileMenuClose}
                handleProfileMenuOpen={handleProfileMenuOpen} />
            <WebProfileNavbarMenu
                menuId={menuId}
                anchorEl={anchorEl}
                isMenuOpen={isMenuOpen}
                handleMenuClose={handleMenuClose} />
        </React.Fragment>)
}