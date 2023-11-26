import { LocaleContextProvider } from "@/locale/_components/localeContextProvider"
import { MessageContextProvider } from "@/message/_components/messageContextProvider"
import { SidebarContextProvider } from "@/sidebar/_components/sidebarContextProvider"
import { ThemeContextProvider } from "@/theme/_components/themeContextProvider"
import { WaitingContextProvider } from "@/waiting/_components/waitingContextProvider"
import { PropsWithChildren } from "react"
import { AuthContextProvider } from "../../auth/_components/authContextProvider"


export const AppProvider = ({ children }: PropsWithChildren) => {
    return (<ThemeContextProvider>
        <AuthContextProvider>
            <LocaleContextProvider>
                <MessageContextProvider>
                    <SidebarContextProvider>
                        <WaitingContextProvider>
                            {children}
                        </WaitingContextProvider>
                    </SidebarContextProvider>
                </MessageContextProvider>
            </LocaleContextProvider>
        </AuthContextProvider>
    </ThemeContextProvider>)
}