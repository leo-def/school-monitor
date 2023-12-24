
import { PropsWithChildren } from "react"
import { MessageContextProvider } from "@/commons/message/_components/messageContextProvider"
import { SidebarContextProvider } from "@/commons/sidebar/_components/sidebarContextProvider"
import { AuthContextProvider } from "../../auth/_components/authContextProvider"
import { ThemeContextProvider } from "@/commons/theme/_components/themeContextProvider"
import { WaitingContextProvider } from "@/commons/waiting/_components/waitingContextProvider"
import { SessionContextProvider } from "@/session/_components/sessionContextProvider"


export const AppProvider = ({ children }: PropsWithChildren) => {
    return (
        <ThemeContextProvider>
            <AuthContextProvider>
                <SessionContextProvider>
                    <MessageContextProvider>
                        <SidebarContextProvider>
                            <WaitingContextProvider>
                                {children}
                            </WaitingContextProvider>
                        </SidebarContextProvider>
                    </MessageContextProvider>
                </SessionContextProvider>
            </AuthContextProvider>
        </ThemeContextProvider>
    )
}