"use client";

import { SessionStateUtils } from "../_services/sessionStateUtils";
import { SessionForm } from "../_types/form/sessionForm";
import { useGetSession } from "./useGetSession";
import { useSetSessionBranchId } from "./useSetSessionBranchId";
import { useSetSessionCompanyId } from "./useSetSessionCompanyId";

export function useGetSessionForm(): SessionForm | undefined {
  const sessionState = useGetSession();
  const setBranchId = useSetSessionBranchId();
  const setCompanyId = useSetSessionCompanyId();
  if (!sessionState) {
    return undefined;
  }
  return SessionStateUtils.toSectionForm(sessionState, {
    branch: setBranchId,
    company: setCompanyId,
  });
}
