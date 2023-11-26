
import { Sidebar } from '@/sidebar/_components/sidebar'
import React, { PropsWithChildren } from 'react'

export interface PrivateLayoutProps extends PropsWithChildren {
    children: React.ReactNode
    navbar: React.ReactNode
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
