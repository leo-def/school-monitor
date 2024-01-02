import React, { PropsWithChildren } from "react";
import { Sidebar } from "@/commons/sidebar/_components/sidebar";

export interface PrivateLayoutProps extends PropsWithChildren {
    readonly children?: React.ReactNode
    readonly navbar?: React.ReactNode
}

export function PrivateLayout({
    children,
    navbar,
}: PrivateLayoutProps) {
    return (
        <React.Fragment>
            <Sidebar />
            <main className='container mx-auto'>
                {navbar}
                {children}
            </main>
        </React.Fragment>
    )
}
