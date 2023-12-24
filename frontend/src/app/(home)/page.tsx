import React from 'react'
import { PrivateHome } from './_components/privateHome'
import { PublicHome } from './_components/publicHome'
import { ProtectedComponent } from '@/auth/_components/protectedComponent'

export default function Page() {
    return (<ProtectedComponent
        renders={{
            protected: (<PrivateHome />),
            public: (<PublicHome />)
        }}
    />)
}