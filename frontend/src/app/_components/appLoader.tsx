import { AuthLoader } from "@/auth/_components/authLoader"
import { ThemeLoader } from "@/commons/theme/_components/themeLoader"

export const AppLoader = () => {
    return (<>
        <AuthLoader />
        <ThemeLoader />
    </>)
}