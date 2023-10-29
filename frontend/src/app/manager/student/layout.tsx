'use client'

import React, { PropsWithChildren, useEffect } from "react";
import { NavItemTypeEnum } from "@/nav/_enums/navItemType.enum";
import { usePushNavItem } from "@/nav/_hooks/usePushNavItem";

export default function ManagerStudentLayout({ children }: PropsWithChildren) {
    const pushNav = usePushNavItem()
    useEffect(() => {
        pushNav({
            type: NavItemTypeEnum.PATH,
            path: 'student',
            index: 1
        })
    }, [pushNav])
    return (<React.Fragment>{children}</React.Fragment >)
}