'use client'

import React, { PropsWithChildren, useMemo } from "react";
import { NavItemTypeEnum } from "@/nav/_enums/navItemType.enum";

import apiFetch from "@/api";
import { Student } from "@/student/_types/student";
import NavPageLoader from "@/nav/_components/navPageLoader";

export default function ManagerStudentLayout({ children, params: { studentId } }: { params: { studentId: string } } & PropsWithChildren) {
    const student = apiFetch(`student/${studentId}`) as Student
    const item = useMemo(() => student
        ? ({
            type: NavItemTypeEnum.STUDENT,
            label: student.name,
            path: studentId,
            object: student,
            index: 2
        }) : undefined, [student, studentId])
    return (item ? <NavPageLoader item={item}>{children}</NavPageLoader> : <React.Fragment>{children}</React.Fragment>)
}