'use client'

import { ProtectedComponent } from "@/auth/_components/protectedComponent"

import { SystemSidebar } from "./account/systemSidebar"
import { CustomerSidebar } from "./account/customerSidebar"

export function Sidebar() {
    return (< ProtectedComponent
        renders={{
            protected: (<CustomerSidebar />),
            public: (<SystemSidebar />)
        }}
    />)
}