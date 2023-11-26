import { useContext } from "react";
import { AuthContext } from "../_contexts/authContext";

export function useGetAuthToken(): string | undefined {
  const { state } = useContext(AuthContext);
  return state?.token;
}
