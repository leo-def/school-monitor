import React, { PropsWithChildren, ReactNode } from 'react'
import { SessionContextProvider } from '@/session/_components/sessionContextProvider';
export interface LayoutProps extends PropsWithChildren {
    readonly children: ReactNode | undefined;
}

export default function Layout({
    children,
}: LayoutProps) {
    return (<SessionContextProvider>
        {children}
    </SessionContextProvider>)
}