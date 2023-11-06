'use client'

import React, { PropsWithChildren, useMemo } from "react";
import { NavItemTypeEnum } from "@/nav/_enums/navItemType.enum";
import apiFetch from "@/api";
import { Teacher } from "@/teacher/_types/teacher";
import NavPageLoader from "@/nav/_components/navPageLoader";

export default function ManagerTeacherItemLayout({ children, params: { teacherId } }: { params: { teacherId: string } } & PropsWithChildren) {

    const teacher = apiFetch(`teacher/${teacherId}`) as Teacher

    const item = useMemo(() => teacher
        ? ({
            type: NavItemTypeEnum.TEACHER,
            label: teacher.name,
            path: teacherId,
            object: teacher,
            index: 2
        }) : undefined, [teacher, teacherId])
    return (item ? <NavPageLoader item={item}>{children}</NavPageLoader> : <React.Fragment>{children}</React.Fragment>)
}