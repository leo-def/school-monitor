import { SessionSetBranchInfoPayload } from "./payloads/sessionSetBranchInfoPayload";
import { SessionSetCompanyInfoPayload } from "./payloads/sessionSetCompanyInfoPayload";
import { SessionSetUserInfoPayload } from "./payloads/sessionSetUserInfoPayload";

export type SessionActionPayload =
  | SessionSetUserInfoPayload
  | SessionSetBranchInfoPayload
  | SessionSetCompanyInfoPayload;
