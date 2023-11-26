import { AuthLoader } from "@/auth/_components/authLoader"
import { LocaleLoader } from "@/locale/_components/localeLoader"
import { ThemeLoader } from "@/theme/_components/themeLoader"

export const AppLoader = () => {
    return (<>
        <AuthLoader />
        <LocaleLoader />
        <ThemeLoader />
    </>)
}