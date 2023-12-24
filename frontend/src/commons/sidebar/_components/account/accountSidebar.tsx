import { Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { SidebarDrawer } from "../sidebarDrawer";
import {
    AccountCircle as AccountCircleIcon,
    CreditCard as CreditCardIcon,
} from '@mui/icons-material';
import Link from "next/link";
import { useTranslation } from "react-i18next";

export function AccountSidebar() {
    const { t } = useTranslation('translation', { keyPrefix: 'sidebar.accountSidebar' })
    return (<SidebarDrawer>
        {/* admin */}
        <List>
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                        <CreditCardIcon />
                    </ListItemIcon>
                    <Link href="/company" passHref>
                        <ListItemText primary={t('Companies')} />{/* i18n */}
                    </Link>
                </ListItemButton>
            </ListItem>
        </List>
        <Divider />
        {/* any*/}
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

// <<admin>>
// /company
//<company-manage>

// <<admin | manage>>
// /manage-board
//<collaborator-manage>
//<branch-manage>
//<school-class>
//<school-subject>
//<school-term>

// <<admin | manage | professor | student >>
// /school-board
//calendar
//meal-manage
//event-manage
//notification-manage
//appraisal-manage
//project-manage
//absence-manage