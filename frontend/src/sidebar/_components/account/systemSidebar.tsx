import React from "react";
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText, Divider } from "@mui/material";
import { SidebarDrawer } from "../sidebarDrawer";
import {
    CreditCard as CreditCardIcon,
    AccountCircle as AccountCircleIcon
} from '@mui/icons-material';
import Link from "next/link";

export function SystemSidebar() {
    return (<SidebarDrawer>
        <List>
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                        <CreditCardIcon />
                    </ListItemIcon>
                    <Link href="/card" passHref>
                        <ListItemText primary="Cards" />{/* i18n */}
                    </Link>
                </ListItemButton>
            </ListItem>
        </List>
        <Divider />
        <List>
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                        <Link href="/account" passHref>
                            <AccountCircleIcon />
                        </Link>
                    </ListItemIcon>
                    <ListItemText primary="Accounts" />{/* i18n */}
                </ListItemButton>
            </ListItem>
        </List>

    </SidebarDrawer>)
}