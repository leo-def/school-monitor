'use client'

import { PropsWithChildren } from "react";
import { GetNavPathProps, useGetNavPath } from "../_hooks/useGetNavPath";
import Link from "next/link";

export type NavItemProps = PropsWithChildren & { path?: string, index?: number };

export function NavItemLink(props: NavItemProps) {
    const { children, path, index } = props;
    const fullPath = useGetNavPath({ path, index } as GetNavPathProps);
    return (<Link href={fullPath} passHref>{children}</Link>)
}