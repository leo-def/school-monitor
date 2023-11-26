import { JWTUtils } from "../_services/jwtUtils";
import { UserInfo } from "../_types/userInfo";
import { useGetAuthToken } from "./useGetAuthToken";

export function useGetAuthUserInfo(): UserInfo | undefined {
  const token = useGetAuthToken();
  const jwtData = JWTUtils.resolveJWTToken<UserInfo>(token);
  return jwtData?.payload;
}
