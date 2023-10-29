"use client";

import { useGetNavItems } from "./useGetNavItems";
export interface GetNavPathProps {
  path?: string;
  index?: number;
}
export function useGetNavPath(props: GetNavPathProps): string {
  const { path, index } = props;
  const items = useGetNavItems();
  const paths = (
    index !== undefined
      ? Object.values(items).filter((obj) => obj.index <= index)
      : Object.values(items)
  )
    .sort((a, b) => (a?.index ?? 0) - (b?.index ?? 0))
    .map((obj) => obj.path);
  if (path) {
    paths.push(path);
  }
  return paths.join("/");
}
