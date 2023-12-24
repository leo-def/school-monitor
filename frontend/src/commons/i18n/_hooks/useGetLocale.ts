"use client";

import { useCookies } from "react-cookie";

export function useGetLocale(): string | undefined {
  const [cookies] = useCookies(["i18next"]);
  return cookies["i18next"];
}
