"use client";
import { useMemo } from "react";
import { UserInfoDto } from "../_types/userInfo/userInfo.dto";
import { JWTUtils } from "../_services/jwtUtils";
import { useGetAuthToken } from "./useGetAuthToken";

export function useGetAuthUserInfo(): UserInfoDto | undefined {
  const token = useGetAuthToken();
  const userInfo = useMemo(
    () => JWTUtils.resolveJWTToken<UserInfoDto>(token)?.payload,
    [token]
  );
  return userInfo;
}
