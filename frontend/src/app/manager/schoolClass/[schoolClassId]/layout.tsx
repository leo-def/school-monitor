'use client'

import React, { PropsWithChildren, useMemo } from "react";
import { NavItemTypeEnum } from "@/nav/_enums/navItemType.enum";
import apiFetch from "@/api";
import { SchoolClass } from "@/schoolClass/_types/schoolClass";
import NavPageLoader from "@/nav/_components/navPageLoader";

export default function ManagerSchoolClassItemLayout({ children, params: { schoolClassId } }: { params: { schoolClassId: string } } & PropsWithChildren) {
    const schoolClass = apiFetch(`schoolClass/${schoolClassId}`) as SchoolClass
    const item = useMemo(() => schoolClass
        ? ({
            type: NavItemTypeEnum.SCHOOL_CLASS,
            label: schoolClass.title,
            path: schoolClassId,
            object: schoolClass,
            index: 2
        }) : undefined, [schoolClass, schoolClassId])
    return (item ? <NavPageLoader item={item}>{children}</NavPageLoader> : <React.Fragment>{children}</React.Fragment>)
}