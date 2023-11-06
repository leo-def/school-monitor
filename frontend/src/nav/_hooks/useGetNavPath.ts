"use client";

import { useContext } from "react";
import { NavContext } from "../_contexts/navContext";

export interface GetNavPathProps {
  path?: string;
  index?: number;
}
export function useGetNavPath(props: GetNavPathProps): string {
  const { path, index } = props;
  const { state } = useContext(NavContext);
  const { items, href } = state;
  const curhref = index
    ? Object.values(items).find((val) => val.index === index - 1)?.href
    : href;
  return `${curhref ?? ""}/${path ?? ""}`;
}
