'use client'

import { ProtectedComponent } from "@/auth/_components/protectedComponent"

import { AccountSidebar } from "./account/accountSidebar"

export function Sidebar() {
    return (< ProtectedComponent
        renders={{
            protected: (<AccountSidebar />),
        }}
    />)
}