'use client'

import React, { PropsWithChildren, useEffect, useState } from "react";
import { NavItemTypeEnum } from "@/nav/_enums/navItemType.enum";
import { usePushNavItem } from "@/nav/_hooks/usePushNavItem";

export default function ManagerStudentSchoolClassLayout({ children }: PropsWithChildren) {

    const pushNav = usePushNavItem()
    useEffect(() => {
        
            pushNav({
                type: NavItemTypeEnum.PATH,
                path: 'schoolClass',
                index: 3
            })
    }, [pushNav])
    return (<React.Fragment>{children}</React.Fragment >)
}