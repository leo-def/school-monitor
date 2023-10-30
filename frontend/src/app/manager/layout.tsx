'use client'

import React, { PropsWithChildren, useEffect, useState } from "react";
import { Home as HomeIcon } from "@mui/icons-material";
import { NavItemTypeEnum } from "@/nav/_enums/navItemType.enum";
import { usePushNavItem } from "@/nav/_hooks/usePushNavItem";

export default function ManagerLayout({ children }: PropsWithChildren) {

    const pushNav = usePushNavItem()
    useEffect(() => {
            pushNav({
                type: NavItemTypeEnum.MANAGER,
                label: <HomeIcon />,
                path: 'manager',
                index: 0,
            })
    }, [pushNav])
    return (<React.Fragment>{children}</React.Fragment >)
}