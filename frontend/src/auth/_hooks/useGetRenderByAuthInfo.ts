"use client";

import { ReactNode, useMemo } from "react";
import { Renders } from "../_types/renders";
import { useGetAuthUserInfo } from "./useGetAuthUserInfo";

export function useGetRenderByAuthInfo(
  renders?: Renders | undefined
): ReactNode | undefined {
  const user = useGetAuthUserInfo();
  const isAuthenticated = useMemo(() => !!user?.id, [user]);
  let result = useMemo(() => {
    if (!isAuthenticated) {
      return renders?.public;
    } else {
      const role = user?.role;
      const roleRender = role && renders ? renders[role] : undefined;
      return roleRender ?? renders?.protected;
    }
  }, [isAuthenticated, renders, user?.role]);
  const render = useMemo(() => result ?? renders?.default, [result, renders]);
  return render;
}
