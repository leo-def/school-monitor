"use client";

import { useCookies } from "react-cookie";

export function useSetLocale(): (locale: string) => void {
  const [, setCookies] = useCookies(["i18next"]);

  return (locale: string): void => {
    setCookies("i18next", locale);
  };
}
