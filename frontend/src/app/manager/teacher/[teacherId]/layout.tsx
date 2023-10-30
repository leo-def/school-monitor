'use client'

import React, { PropsWithChildren, useEffect, useState } from "react";
import { NavItemTypeEnum } from "@/nav/_enums/navItemType.enum";
import { usePushNavItem } from "@/nav/_hooks/usePushNavItem";
import apiFetch from "@/api";
import { Teacher } from "@/teacher/_types/teacher";

export default function ManagerTeacherItemLayout({ children, params: { teacherId } }: { params: { teacherId: string } } & PropsWithChildren) {

    const pushNav = usePushNavItem()
    useEffect(() => {
        const teacher = apiFetch(`teacher/${teacherId}`) as Teacher
        if(!!teacher) {
            pushNav({
                type: NavItemTypeEnum.TEACHER,
                label: teacher.name,
                path: teacherId,
                object: teacher,
                index: 2
            })
        }
    }, [pushNav, teacherId])
    return (<React.Fragment>{children}</React.Fragment >)
}