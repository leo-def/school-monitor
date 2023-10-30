"use client";

import { useGetNavItems } from "./useGetNavItems";
export interface GetNavPathProps {
  path?: string;
  index?: number;
}
export function useGetNavPath(props: GetNavPathProps): string {
  const { path, index } = props;
  const items = useGetNavItems();
  if (index === 0){
    return path ?? '';
  }
  const item = items[(index ?? items.length) - 1];
  return (`${item?.href ?? ''}/${path ?? ''}`);
}