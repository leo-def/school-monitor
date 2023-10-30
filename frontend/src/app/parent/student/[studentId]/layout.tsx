'use client'

import React, { PropsWithChildren, useEffect, useState } from "react";
import { NavItemTypeEnum } from "@/nav/_enums/navItemType.enum";
import { usePushNavItem } from "@/nav/_hooks/usePushNavItem";
import apiFetch from "@/api";
import { Student } from "@/student/_types/student";

export default function ParentStudentItemLayout({ children, params: { studentId } }: { params: { studentId: string } } & PropsWithChildren) {

    const pushNav = usePushNavItem()
    useEffect(() => {
        const student = apiFetch(`student/${studentId}`) as Student
        if(!!student) {
            pushNav({
                type: NavItemTypeEnum.STUDENT,
                label: student.name,
                path: studentId,
                object: student,
                index: 2
            })
        }
    }, [pushNav, studentId])
    return (<React.Fragment>{children}</React.Fragment >)
}