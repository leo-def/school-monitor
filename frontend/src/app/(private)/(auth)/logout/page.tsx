'use client'

import React, { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useLogout } from "@/auth/_hooks/useLogout"

export default function LogoutPage() {
    const logout = useLogout()
    const router = useRouter()
    useEffect(() => {
        logout()
        router.replace('/')

    }, [logout, router])

    return (<React.Fragment></React.Fragment>)
}