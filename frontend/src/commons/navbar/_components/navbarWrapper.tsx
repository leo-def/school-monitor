"use client";

import React from "react";
import { AppBar, ThemeProvider, Toolbar, createTheme } from "@mui/material";

export function NavbarWrapper({
    children,
}: {
    children: React.ReactNode
}) {
    const darkTheme = createTheme({
        palette: {
            mode: 'dark',
        },
    });
    return (
        <React.Fragment>
            <AppBar position="fixed">
                <Toolbar>

                    <ThemeProvider theme={darkTheme}>
                        {children}
                    </ThemeProvider>
                </Toolbar>
            </AppBar>
            <Toolbar />
        </React.Fragment>
    )
}
