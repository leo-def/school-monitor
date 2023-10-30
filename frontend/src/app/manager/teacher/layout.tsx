'use client'

import React, { PropsWithChildren, useEffect, useState } from "react";
import { NavItemTypeEnum } from "@/nav/_enums/navItemType.enum";
import { usePushNavItem } from "@/nav/_hooks/usePushNavItem";

export default function ManagerTeacherLayout({ children }: PropsWithChildren) {

    const pushNav = usePushNavItem()
    useEffect(() => {
        
            pushNav({
                type: NavItemTypeEnum.PATH,
                path: 'teacher',
                index: 1
            })
    }, [pushNav])
    return (<React.Fragment>{children}</React.Fragment >)
}