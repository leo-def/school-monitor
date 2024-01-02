import React, { PropsWithChildren, ReactNode } from "react";

export interface PublicLayoutProps extends PropsWithChildren {
    readonly children: ReactNode | undefined
}

export function PublicLayout({
    children,
}: PublicLayoutProps) {
    return (
        <main className='container mx-auto'>
            {children}
        </main>
    )
}
