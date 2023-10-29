"use client";

import { useContext } from "react";
import { NavContext } from "../_contexts/navContext";
import { NavItem } from "../_types/navItem";

export function useGetNavByType(type: string): NavItem | undefined {
  const { state } = useContext(NavContext);
  return Object.values(state?.items).find((item) => item.type === type);
}
