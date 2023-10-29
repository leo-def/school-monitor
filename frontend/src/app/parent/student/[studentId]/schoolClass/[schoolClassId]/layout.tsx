'use client'

import React, { PropsWithChildren, useEffect } from "react";
import { NavItemTypeEnum } from "@/nav/_enums/navItemType.enum";
import { usePushNavItem } from "@/nav/_hooks/usePushNavItem";
import apiFetch from "@/api";
import { SchoolClass } from "@/schoolClass/_types/schoolClass";

export default function ParentStudentSchoolClassItemLayout({ children, params: { schoolClassId } }: { params: { schoolClassId: string } } & PropsWithChildren) {
    const pushNav = usePushNavItem()
    useEffect(() => {
        const schoolClass = apiFetch(`schoolClass/${schoolClassId}`) as SchoolClass
        pushNav({
            type: NavItemTypeEnum.SCHOOL_CLASS,
            label: schoolClass.title,
            path: schoolClassId,
            object: schoolClass,
            index: 4
        })
    }, [pushNav, schoolClassId])
    return (<React.Fragment>{children}</React.Fragment >)
}