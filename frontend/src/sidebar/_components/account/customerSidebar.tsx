import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { SidebarDrawer } from "../sidebarDrawer";
import {
    CreditCard as CreditCardIcon,
} from '@mui/icons-material';

export function CustomerSidebar() {
    return (<SidebarDrawer>
        <List>
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                        <CreditCardIcon />
                    </ListItemIcon>
                    <ListItemText primary="Cards" />{/* i18n */}
                </ListItemButton>
            </ListItem>
        </List>
    </SidebarDrawer>)
}