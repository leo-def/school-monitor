'use client'

import React, { PropsWithChildren, useMemo } from "react";
import { Home as HomeIcon } from "@mui/icons-material";
import { NavItemTypeEnum } from "@/nav/_enums/navItemType.enum";
import NavPageLoader from "@/nav/_components/navPageLoader";

export default function ParentLayout({ children }: PropsWithChildren) {
    const item = useMemo(() => ({
        type: NavItemTypeEnum.PARENT,
        label: <HomeIcon />,
        path: 'parent',
        index: 0,
    }), [])
    return (<NavPageLoader item={item}>{children}</NavPageLoader>)
}