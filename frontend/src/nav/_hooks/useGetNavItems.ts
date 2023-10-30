"use client";

import { useContext } from "react";
import { NavContext } from "../_contexts/navContext";
import { NavItem } from "../_types/navItem";

export function useGetNavItems(): Array<NavItem> {
  const { state } = useContext(NavContext);
  const items = state?.items ?? {};
  return Object.values(items).sort((a, b) => (a.index - b.index));
}
