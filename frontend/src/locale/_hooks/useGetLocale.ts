import { useContext } from "react";
import { LocaleContext } from "../_contexts/localeContext";
import { Locale } from "../_types/locale";

export function useGetLocale(): Locale | undefined {
  const { state } = useContext(LocaleContext);
  return state?.locale;
}
