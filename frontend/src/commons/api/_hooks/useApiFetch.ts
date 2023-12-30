import { useGetAuthToken } from "@/auth/_hooks/useGetAuthToken";
import { useRouter } from "next/navigation";
import { useCallback } from "react";

export function useApiFetch(): (
  input: RequestInfo | URL,
  init?: RequestInit
) => Promise<Response> {
  const token = useGetAuthToken();
  const router = useRouter();
  const func = useCallback(
    (input: RequestInfo | URL, init?: RequestInit) => {
      const headers = {
        "Content-Type": "application/json",
        Accept: "application/json",
        ...(init?.headers ?? {}),
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      };
      if (input instanceof URL) {
        input.hostname = process.env.NEXT_PUBLIC_API_URL ?? "";
      } else {
        input = `${process.env.NEXT_PUBLIC_API_URL}${
          input instanceof Request ? input.url : input
        }`;
      }
      const asyncFunc = async function () {
        const response = await fetch(input, {
          ...(init ?? {}),
          mode: "cors",
          headers,
        });
        if (response.status === 401) {
          router.replace("/logout");
        }
        return response;
      };
      return asyncFunc();
    },
    [router, token]
  );
  return func;
}
