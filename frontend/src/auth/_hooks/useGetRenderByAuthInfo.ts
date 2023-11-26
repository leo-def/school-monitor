import { ReactNode } from "react";
import { Renders } from "../_types/renders";
import { useGetAuthUserInfo } from "./useGetAuthUserInfo";

export function useGetRenderByAuthInfo(
  renders?: Renders | undefined
): ReactNode | undefined {
  const user = useGetAuthUserInfo();
  console.log("useGetAuthUserInfo", { user });
  const isAuthenticated = !!user?.id;
  let result = null;
  if (!isAuthenticated) {
    result = renders?.public;
  } else {
    const role = user?.role;
    const roleRender = role && renders ? renders[role] : undefined;
    result = roleRender ?? renders?.protected;
  }
  return result ?? renders?.default;
}
