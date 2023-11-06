'use client'

import React, { PropsWithChildren, useMemo } from "react";
import { NavItemTypeEnum } from "@/nav/_enums/navItemType.enum";
import NavPageLoader from "@/nav/_components/navPageLoader";

export default function ManagerSchoolClassLayout({ children }: PropsWithChildren) {
    const item = useMemo(() => ({
        type: NavItemTypeEnum.PATH,
        path: 'schoolClass',
        index: 1
    }), [])
    return (<NavPageLoader item={item}>{children}</NavPageLoader>)
}