'use client'

import React, { PropsWithChildren, useCallback } from 'react';
import { IconButton, Box, Drawer } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { useSetSidebarOpen } from '@/sidebar/_hooks/useSetSidebarOpen';
import { useIsSidebarOpen } from '../_hooks/useIsSidebarOpen';

export function SidebarDrawer(props: PropsWithChildren) {

    const isSidebarOpen = useIsSidebarOpen()
    const setSidebarOpen = useSetSidebarOpen()

    const toggleDrawer = useCallback(
        (open: boolean) =>
            (event: React.KeyboardEvent | React.MouseEvent) => {
                if (
                    event.type === 'keydown' &&
                    ((event as React.KeyboardEvent).key === 'Tab' ||
                        (event as React.KeyboardEvent).key === 'Shift')
                ) {
                    return;
                }

                setSidebarOpen(open);
            }, [setSidebarOpen]);

    return (<React.Fragment>
        <IconButton aria-label="open sidebar" onClick={toggleDrawer(true)}>
            <MenuIcon />
        </IconButton>
        <Drawer
            anchor="left"
            open={isSidebarOpen}
            onClose={toggleDrawer(false)}
        >    <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
                {props.children}
            </Box>
        </Drawer>
    </React.Fragment>
    );
}