import { useContext } from "react";
import { AuthContext } from "../_contexts/authContext";
import { UserInfo } from "../_types/userInfo";

export function useGetUserInfo(): UserInfo | undefined {
  const { state } = useContext(AuthContext);
  return state?.user;
}
