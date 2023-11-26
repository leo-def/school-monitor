import React, { PropsWithChildren } from 'react'
import { PublicNavbar } from '@/navbar/_components/public/publicNavbar'

export interface PublicLayoutProps extends PropsWithChildren { }

export function PublicLayout({
    children,
}: PublicLayoutProps) {
    return (
        <main className='container mx-auto'>
            <PublicNavbar />
            {children}
        </main>
    )
}
