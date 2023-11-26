import { LocaleTypeEnum } from "../_enums/localeType.enum";

export function useGetPreferedLocaleType(): string | undefined {
  const lang = navigator.languages.find((lang) =>
    Object.values(LocaleTypeEnum).includes(lang as unknown as LocaleTypeEnum)
  );
  return lang;
}
