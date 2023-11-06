import { Box, Tabs } from "@mui/material";
import { PropsWithChildren, SyntheticEvent } from "react";

export interface TabBarProps extends PropsWithChildren {
    page?: number
    onChange?: (event: SyntheticEvent<Element, Event>, value: any) => void
}

export function TabBar({ children, page, onChange }: TabBarProps) {
    console.log(page)
    return <Box sx={{ borderBottom: 1, borderColor: 'divider', maxWidth: '100vw' }}>
        <Tabs
            value={page ?? 0}
            onChange={onChange}
            aria-label="tabs"
            variant="scrollable"
            scrollButtons
            allowScrollButtonsMobile>
            {children}
        </Tabs>
    </Box>
}