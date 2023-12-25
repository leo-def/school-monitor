'use client'

import React, { useEffect } from "react"
import { useLogout } from "@/auth/_hooks/useLogout"

export default function LogoutPage() {
    const logout = useLogout()
    useEffect(() => {
        logout()
    }, [logout])

    return (<React.Fragment>Logout</React.Fragment>)
}